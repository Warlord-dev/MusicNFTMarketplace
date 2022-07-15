// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "hardhat/console.sol";

contract Marketplace is ReentrancyGuard {
    // Variables
    address payable public immutable feeAccount; // the account that receives fees
    uint public immutable feePercent; // the fee percentage on sales 
    uint public itemCount; 

    struct Item {
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }

    // itemId -> Item
    mapping(uint => Item) public items;

    event Offered(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );
    event Bought(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer
    );

    constructor(uint _feePercent) {
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    }

    // Make item to offer on the marketplace
    function makeItem(IERC721 _nft, uint _tokenId, uint _price) external nonReentrant {
        require(_price > 0, "Price must be greater than zero");
        // increment itemCount
        itemCount ++;
        // transfer nft
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        // add new item to items mapping
        items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );
        // emit Offered event
        emit Offered(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        );
    }

    function purchaseItem(uint _itemId) external payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value >= _totalPrice, "not enough ether to cover item price and market fee");
        require(!item.sold, "item already sold");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        // update item to sold
        item.sold = true;
        // transfer nft to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        // emit Bought event
        emit Bought(
            _itemId,
            address(item.nft),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return((items[_itemId].price*(100 + feePercent))/100);
    }

    function fetchItems(uint page) view external returns(Item[] memory) {
        // default pageSize = 10, firstPage = 0
        uint startIndex = page * 10;
        uint endIndex = (startIndex + 10) > itemCount ? itemCount : (startIndex + 9);
        uint itemsPerPage = endIndex - startIndex + 1;
        Item[] memory nfts = new Item[](itemsPerPage);

        for (uint i = 0; i < itemsPerPage; i ++) {
            nfts[i] = items[i + page * 10];
        }

        return nfts;
    }

    function fetchMyItems() view external returns(Item[] memory) {
        Item[] memory myItems = new Item[](itemCount);
        uint myItemsCount = 0;
        for (uint i = 0; i < itemCount; i += 1) {
            if (items[i].seller == msg.sender) {
                myItems[myItemsCount++] = items[i];
            }
        }

        return myItems;
    }

    function fetchItemsByAuthor(address authorAddress) view external returns(Item[] memory) {
        Item[] memory authorItems = new Item[](itemCount);

        uint authorItemsCount = 0;
        for (uint i = 0; i < itemCount; i += 1) {
            if (items[i].seller == authorAddress) {
                authorItems[authorItemsCount++] = items[i];
            }
        }

        return authorItems;
    }
}
const { expect } = require("chai");
const { ethers } = require("hardhat");
const toWei = (num) => ethers.utils.parseEther(num.toString())

// describe("Token contract", function () {
//     it("Deployment should assign the total supply of tokens to the owner", async function () {
//         let addr1TokenURI = "addr1TokenURI";
//         let addr2TokenURI = "addr2TokenURI";

//         const [owner, addr1, addr2 ] = await ethers.getSigners();

//         const Marketplace = await ethers.getContractFactory("Marketplace");

//         const marketplace = await Marketplace.deploy(0);

//         const NFTMusic = await ethers.getContractFactory("NFTMusic");
//         const nftMusic = await NFTMusic.deploy();

//         nftMusic.connect(addr1).mint(addr1TokenURI);
//         nftMusic.connect(addr2).mint(addr2TokenURI);
//         console.log("token count",await nftMusic.tokenCount());
//         // nftMusic.mi
  
//     //   const ownerBalance = await marketplace.balanceOf(owner.address);
//     //   expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//     });
//   });

describe("Make item", function () {
    it ("Deployment should make nft item", async function () {
        let addr1TokenURI = "addr1TokenURI";
        let addr2TokenURI = "addr2TokenURI";

        const [owner, addr1, addr2 ] = await ethers.getSigners();

        const Marketplace = await ethers.getContractFactory("Marketplace");

        const marketplace = await Marketplace.deploy(0);

        const NFTMusic = await ethers.getContractFactory("NFTMusic");
        const nftMusic = await NFTMusic.deploy();

        await nftMusic.connect(addr1).mint(addr1TokenURI);
        await nftMusic.connect(addr2).mint(addr2TokenURI);

        await nftMusic.connect(addr1).setApprovalForAll(marketplace.address, true);
        await nftMusic.connect(addr2).setApprovalForAll(marketplace.address, true);
        console.log("token count",await nftMusic.tokenCount());

        await marketplace.connect(addr1).makeItem(nftMusic.address, 1, toWei(1));
        await marketplace.connect(addr2).makeItem(nftMusic.address, 2, toWei(2));

        const myItems = await marketplace.connect(addr2).fetchMyItems();
        const items = await marketplace.connect(addr1).fetchItems(0);
        const itemCount = await marketplace.itemCount();
        console.log("items: ", items)
    });
});

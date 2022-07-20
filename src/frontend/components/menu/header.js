import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";
import { useSelector, useDispatch } from 'react-redux';
import { setWalletAccount } from "../../store/reducer/walletAccountSlice";
import metamaskIcon from "../../assets/icons/metamask.svg";

setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header = function () {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const walletAccount = useSelector((state) => state.walletAccount);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!walletAccount?.address) {
        connectToMetamask()
      }
    }, [walletAccount]);

    const connectToMetamask = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      dispatch(setWalletAccount({ address: accounts[0]} )); 
    }

    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = (): void => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = (): void => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    const closeMenu2 = (): void => {
      setOpenMenu2(false);
    };
    const closeMenu3 = (): void => {
      setOpenMenu3(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });

    const [showmenu, btn_icon] = useState(false);

    const toShortAddress = (address) => {
      if (!address) {
        return null;
      }

      return `${address.slice(0, 6)}...${address.slice(address.length - 5, address.length - 1)}`;
    }

    useEffect(() => {
      const header = document.getElementById("myHeader");
      const totop = document.getElementById("scroll-to-top");
      const sticky = header.offsetTop;

      const scrollCallBack = window.addEventListener("scroll", () => {
          btn_icon(false);
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            totop.classList.add("show");
            
          } else {
            header.classList.remove("sticky");
            totop.classList.remove("show");
          } if (window.pageYOffset > sticky) {
            closeMenu();
          }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    const goToMarketplace = () => {

    }

    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                  {/* <img
                    src="/img/logo.jpg"
                    className="img-fluid d-block"
                    alt="#"
                  /> */}
                  {/* <img
                    src="/img/logo.jpg"
                    className="img-fluid d-3"
                    alt="#"
                  /> */}
                  <img
                    src="/img/logo.jpg"
                    className="img-fluid d-none"
                    alt="#"
                    style={{ width: '46px', borderRadius: '80%' }}
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                          <NavLink to="/">
                            Home
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <NavLink to="/marketplace">
                            Marketplace
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <NavLink to="/create">
                            Min NFT
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/#">
                        MusicVerse
                        <span className='lines'></span>
                      </NavLink>
                    </div>

                    <div className='navbar-item'>
                      <NavLink to="/staking">
                        Staking
                        <span className='lines'></span>
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                          <NavLink to="/">
                            Home
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <NavLink to="/marketplace">
                            Marketplace
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <NavLink to="/create">
                            Min NFT
                            <span className='lines'></span>
                          </NavLink>
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/#">
                        MusicVerse
                        <span className='lines'></span>
                      </NavLink>
                    </div>

                    <div className='navbar-item'>
                      <NavLink to="/staking">
                        Staking
                        <span className='lines'></span>
                      </NavLink>
                    </div>
                    {/* <div className='navbar-item'>
                      <div ref={ref3}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                            Elements
                            <span className='lines'></span>
                            {openMenu3 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu3}>
                              <NavLink to="/elegantIcons">Elegant Icon</NavLink>
                              <NavLink to="/etlineIcons">Etline Icon</NavLink>
                              <NavLink to="/fontAwesomeIcons">Font Awesome Icon</NavLink>
                              <NavLink to="/accordion">Accordion</NavLink>
                              <NavLink to="/alerts">Alerts</NavLink>
                              <NavLink to="/price">Pricing Table</NavLink>
                              <NavLink to="/progressbar">Progess Bar</NavLink>
                              <NavLink to="/tabs">Tabs</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                    </div> */}
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                {
                  walletAccount?.address
                    ? (
                      <div className="wrapper-metamask-icon">
                        <img src={metamaskIcon} />
                        {toShortAddress(walletAccount?.address)}
                      </div>
                    )
                    : (
                      <NavLink to="/wallet" className="btn-main">Connect Wallet</NavLink>
                    )
                }
                
              </div>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;
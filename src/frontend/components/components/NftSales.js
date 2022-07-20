import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { useSelector } from 'react-redux';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const NftSales = () => {
  const walletAccount = useSelector((state) => state.walletAccount);

 return (
      <div className='row mb-4'>
            <div className="col-3 mb-3 mnft-sale">
                <div className="wrapper-author-image" >
                  <div
                    className='author-image'
                    style={{ backgroundImage: 'url("/img/author/patJunior.jpg")'}}
                    onClick={() => window.open("/Author/5", "_self")}
                  />
                </div>
                <div className='mnft-sale__collections'>
                  <div className='mnft-sale__author-name'>Pat Junior</div>
                  <div className='mnft-sale__release-date'>Release Date: June 24th</div>
                </div>
            </div>

          <div className="col-3 mb-3 mnft-sale">
            <div className="wrapper-author-image" >
                  <div className='author-image' style={{ backgroundImage: 'url("/img/author/CarlaThePoet.jpg")'}} />
                </div>
                <div className='mnft-sale__collections'>
                  <div className='mnft-sale__author-name'>Carla the poet</div>
                  <div className='mnft-sale__release-date'>Release Date: June 25th</div>
                </div>
          </div>

          <div className="col-3 mb-3 mnft-sale">
                <div className="wrapper-author-image" >
                  <div className='author-image' style={{ backgroundImage: 'url("/img/author/soStuffSoCute.jpg")'}} />
                </div>
                <div className='mnft-sale__collections'>
                  <div className='mnft-sale__author-name'>So Tuff So Cute</div>
                  <div className='mnft-sale__release-date'>Release Date: June 26th</div>
                </div>
            </div>

            <div className="col-3 mb-3 mnft-sale">
                <div className="wrapper-author-image" >
                  <div className='author-image' style={{ backgroundImage: 'url("/img/author/ImanEurope.jpg")'}} />
                </div>
                <div className='mnft-sale__collections'>
                  <div className='mnft-sale__author-name'>Iman Europe</div>
                  <div className='mnft-sale__release-date'>Release Date: N/A</div>
                </div>
            </div>
        </div>
 );
};
export default NftSales;
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );

      
  }
}

export default class Upcomming extends Component {

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
        <div className='nft-big'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div>                            
                  <div className="itm__wrapper-features">
                    <div className="features-text">Metaverse digital concert</div>
                    <div className="release-date">August 2022</div>
                  </div>
                  <div className="upcomming-features">
                      <img src="./img/carousel/crs-1.jpg" className="lazy" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
                <div>
                    <div className="itm__wrapper-features">
                        <div className="features-text">RELEASE APP</div>
                        <div className="release-date">August 2022</div>
                    </div>
                    <div className="upcomming-features">
                        <img src="./img/carousel/mobileapp.jpg" className="lazy" alt=""/>
                    </div>
                </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
                <div>                            
                    <div className="itm__wrapper-features">
                        <div className="features-text">LISTEN TO EARN</div>
                        <div className="release-date">Q4 2022</div>
                    </div>
                    <div className="upcomming-features">
                        <img src="./img/carousel/l2e.jpg" className="lazy" alt=""/>
                    </div>
                </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
                <div>
                    <div className="itm__wrapper-features">
                        <div className="features-text">Famous Artists</div>
                        <div className="release-date">Q4 2022</div>
                    </div>
                    <div className="upcomming-features">
                        <img src="./img/carousel/famouseArtist.jpg" className="lazy" alt=""/>
                    </div>
                </div>
            </CustomSlide>
          </Slider>
        </div>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Collections, DummyAuthors } from "../../data/Collections";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    const hotAuthors = DummyAuthors.sort((prev, next) => next.followers - prev.followers).filter((item, index) => index <= 5);
    for (let i = 0; i < hotAuthors?.length; i += 1) {
      const firstAuthorAudio = Collections.find(item => item?.authorId === hotAuthors[i].id);
      hotAuthors[i].audioBackground = firstAuthorAudio.background;
    }
    this.setState({ ...this.state, authors: hotAuthors });
  }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
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
        <div className='nft'>
          <Slider {...settings}>
            {
              this.state.authors.map((author) => (
                <CustomSlide className='itm' index={1}>
                  <div className="nft_coll">
                      <div className="nft_wrap">
                          <span><img src={author?.audioBackground || author?.background} className="lazy img-fluid" alt=""/></span>
                      </div>
                      <div className="nft_coll_pp">
                          <span onClick={()=> window.open(`/Author/${author?.id}`, "_self")}><img className="lazy" src={author?.avatar} alt=""/></span>
                          <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                          <span onClick={()=> window.open("/home", "_self")}><h4>{author?.name}</h4></span>
                          <span>BSC</span>
                      </div>
                  </div>
                </CustomSlide>
              ))
            }
          </Slider>
        </div>
    );
  }
}

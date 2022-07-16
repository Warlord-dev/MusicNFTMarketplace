import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";
import { navigate } from "@reach/router";
import { Collections, DummyAuthors, FEATURES } from "../../data/Collections";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 219px;
  overflow: hidden;
  border-radius: 8px;
`;

const Audio = styled.audio`
    width: 0;
    height: 0;
    position: absolute;
`;


class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  dummyData = [
    {
        id: 1,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/apeDrops.png",
        previewImg: "./img/collections/apeDrops/FoolinYaself.png",
        title: "Rollin",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/FoolinYaself.mp3",
            id: 1,
            name: "Foolin Yaself"
        }
    },
    {
        id: 2,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/CryptoRaiders.png",
        previewImg: "./img/collections/CryptoRaiserBackground.png",
        title: "Rollin",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/cryptoRaiders/LastCallAtTheDrunkenFairy.mp3",
            id: 2,
            name: "Last call at the drunken fairy"
        }
    },
    {
        id: 3,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/asyncMusic.png",
        previewImg: "./img/collections/asyncMusic/AsyncMusic1.jpg",
        title: "Rollin",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/asyncMusic/AsyncMusic1.mp3",
            id: 3,
            name: "The Song of Nine Paths Gold Edition"
        },
    },
    {
        id: 4,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/ApeVsPunk.jpg",
        previewImg: "./img/collections/apeVsPunk/WhoCare.png",
        title: "Oshi",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/apeVsPunk/WhoCare.mp3",
            id: 4,
            name: "Ape vs Punk. Who care?"
        },
    },
    {
        id: 5,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/MyCryptoPunk.gif",
        previewImg: "./img/collections/cryptoPunk/MyCryptoPunk.jpg",
        title: "Oshi",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/cryptoPunk/MyCryptoPunk.mp3",
            id: 5,
            name: "Crypto punk?"
        },
    },
    {
        id: 6,
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/MonteBooker.png",
        previewImg: "./img/collections/monteBooker/kolors.png",
        title: "Oshi",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50,
        audio: {
            src: "./audio/monteBooker/MonteBooker.wav",
            id: 6,
            name: "Kolors"
        },
    },
    {
      id: 7,
      deadline:"December, 30, 2021",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/aluna.jpg",
      previewImg: "./img/collections/alunaMusic/background.jpg",
      title: "Oshi",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
      audio: {
          src: "./audio/alunaMusic/ForgetAboutMe.wav",
          id: 7,
          name: "Forget about me"
      },
    },
    {
      id: 8,
      deadline:"December, 30, 2021",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/djMike.jpg",
      previewImg: "./img/collections/djMike/T800.png",
      title: "Oshi",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
      audio: {
          src: "./audio/djMike/caT8000.mp3",
          id: 8,
          name: "#004 caT8000"
      },
    },
    {
      id: 9,
      deadline:"December, 30, 2021",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/djMike.jpg",
      previewImg: "./img/collections/djMike/Christofffrrr.png",
      title: "Oshi",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
      audio: {
          src: "./audio/djMike/Christofffrrr.mp3",
          id: 9,
          name: "Christofffrrr"
      },
    },
    {
      id: 10,
      deadline:"December, 30, 2021",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/zah23.jpg",
      previewImg: "./img/collections/zah23/zah23.PNG",
      title: "Oshi",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
      audio: {
          src: "./audio/zah23/MenteOscura.mp3",
          id: 10,
          name: "Mente Oscura"
      },
    }
]

  constructor(props) {
        super(props);
        this.state = {
            deadline: "January, 10, 2022",
            deadline1: "February, 10, 2022",
            deadline2: "February, 1, 2022",
            audioPlayingId: "",
            nftItems: []
        };
        this.playAudio = this.playAudio.bind(this);
        this.playMedia = this.playMedia.bind(this);
        this.goToAuthorCollections = this.goToAuthorCollections.bind(this);
    }

    componentDidMount() {
      const items = Collections.filter((item) => item?.features.includes(FEATURES.NEW));
      const authorIds = items.map((item) => item?.authorId);
      const authorMap = new Map();
      DummyAuthors.filter((item) => authorIds?.includes(item?.id)).forEach(item => {
        authorMap.set(item.id, item);
      });
      const nftItems = items?.map(item => ({ ...item, author: authorMap.get(item?.authorId) }));
      this.setState({ ...this.state, nftItems });
    }

    playAudio(audioId) {
        const audio = document.getElementById(`new-items-${audioId}`);
        const { audioPlayingId } = this.state;

        if (audioPlayingId) {
            if (audioId === audioPlayingId) {
                audio.pause();
                this.setState({ ...this.state, audioPlayingId: "" });
            } else {
                const currentAudio = document.getElementById(`new-items-${audioPlayingId}`);
                currentAudio.pause();
                audio.play();
                this.setState({ ...this.state, audioPlayingId: audioId });
            }
        } else {
            audio.play();
            this.setState({ ...this.state, audioPlayingId: audioId });
        }
    }
    
    goToAuthorCollections(authorId) {
        navigate(`/Author/${authorId}`);
    }

    playMedia(data) {
      const media = document.getElementById(`new-items-${data?.id}`);;
      if (data?.videoSrc) {
        if (data?.id === this.state.audioPlayingId) {
          media.pause();
          this.setState({ ...this.state, audioPlayingId: "" });
        } else {
          const currentVideo = document.getElementById(`new-items-${data?.id}`);
          currentVideo.pause();
          media.play();
          this.setState({ ...this.state, audioPlayingId: data?.id });
        }
      } else {
        this.playAudio(data?.id)
      }
    }

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
                this.state.nftItems?.map((item) => (
                    <CustomSlide className='itm' index={3}>
                        <div className="d-item">
                            <div className="nft__item">
                                {/* <div className="de_countdown"> */}
                                {/* <Clock deadline={this.state.deadline1} /> */}
                                {/* </div> */}
                                <div className="author_list_pp">
                                    <span onClick={() => this.goToAuthorCollections(item.authorId)}>                                    
                                        <img className="lazy" src={item?.author?.avatar} alt=""/>
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                                <div className="nft__item_wrap">
                                <Outer>
                                  <div className="g-relative">
                                      {item?.videoSrc ? null : <img src={item?.background} className="lazy nft__item_preview" alt="" />}
                                      <span
                                          className="icon-play"
                                          style={{ zIndex: 9  }}
                                          onClick={() => this.playMedia(item)}
                                        >
                                          <span aria-hidden="true" className={item?.id === this.state.audioPlayingId ? 'icon_pause' : 'arrow_triangle-right'}></span>
                                      </span>
                                      {
                                        item?.videoSrc
                                          ? (<video id={`new-items-${item?.id}`}  controlslist="nodownload" style={{ height: '200px', width: '200px' }}>
                                              <source
                                                  src={item?.videoSrc || ""}
                                                  type="video/mp4"
                                              />
                                            </video>)
                                          : (
                                            <Audio id={`new-items-${item?.id}`} controls >
                                              <source
                                                  src={item?.src || ""}
                                                  type="audio/mpeg"
                                              />
                                          </Audio>
                                          )
                                      }
                                      
                                  </div>
                              </Outer>
                                </div>
                                <div className="nft__item_info">
                                    <span onClick={()=> window.open("/#", "_self")}>
                                        <h4>{item?.name}</h4>
                                    </span>
                                    <div className="nft__item_price">
                                        {item?.price} {' '} {item?.unitPrice}<span>{item?.bid}</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <span onClick={()=> window.open("/#", "_self")}>Purchase on Opensea</span>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>{item?.likes}</span>
                                    </div>                                 
                                </div> 
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

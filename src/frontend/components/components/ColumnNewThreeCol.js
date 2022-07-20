import React, { Component, useEffect, useState } from "react";
import { Collections, DummyAuthors } from "../../data/Collections";
import styled from "styled-components";

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

 const Responsive = (props) => {
    const [ nfts, setNfts ] = useState([]);
    const [ allNfts, setAllNfts ] = useState([]);
    const [ pageNo, setPageNo ] = useState(0);
    const [ mounted, setMounted ] = useState(false);
    const [ audioPlayingId, setAudioPlayingId ] = useState(null);

    useEffect(() => {
        let orderedNftsByLike = Collections.sort((a, b) => b.likes - a.likes);
        const authorsMap = new Map();
        DummyAuthors.forEach((author) => {
            authorsMap.set(author.id, author);
        });
        
        orderedNftsByLike = orderedNftsByLike.map((item) => ({ ...item, author: authorsMap.get(item.authorId) }))

        let nfts = orderedNftsByLike.slice(0, 8);
        setMounted(true);
        setNfts(nfts);
        setAllNfts(orderedNftsByLike);
    }, []);

    useEffect(() => {
        if (mounted) {
            const filteredNfts = allNfts.filter((nft) => ((props.statuses.length == 0 || props.statuses.includes(nft.status))
                && (props.types?.length === 0 || props.types?.includes(nft.type))
                && (props.currencies?.length == 0 || props.currencies?.includes(nft.unitPrice)))
            );
            const nfts = filteredNfts.slice(0, 8);
            setNfts(nfts);
        }
    }, [props.statuses.length, props.types.length, props.currencies?.length])

    // componentWillReceiveProps(nextProps) {
    //     if (this.props !== nextProps) {
    //         const { statuses } = this.props;
    //         const nfts = this.state.orderedNftsByLike.filter(nft => (statuses.length === 0 || statuses.includes(nft.status))).slice(0, 8);
    //         this.setState({ ...this.state, nfts });
    //         debugger
    //     }
    // }

    const loadMore = () => {
        let end = nfts.length + 4;
        setNfts(allNfts.slice(0, end));
    }

    // onImgLoad({target:img}) {
    //     let currentHeight = this.state.height;
    //     if(currentHeight < img.offsetHeight) {
    //         this.setState({
    //             height: img.offsetHeight
    //         })
    //     }
    // }

    const goToAuthorCollections = (authorId) => {
        window.open(`/Author/${authorId}`, '_self')
    }

    const playAudio = (audioId) => {
        const audio = document.getElementById(`new-items-${audioId}`);

        if (audioPlayingId) {
            if (audioId === audioPlayingId) {
                audio.pause();
                setAudioPlayingId(null);
            } else {
                const currentAudio = document.getElementById(`new-items-${audioPlayingId}`);
                currentAudio.pause();
                audio.play();
                setAudioPlayingId(audioId);
            }
        } else {
            audio.play();
            setAudioPlayingId(audioId);
        }
    }
    

    const playMedia = (data) => {
        const media = document.getElementById(`new-items-${data?.id}`);;
        if (data?.videoSrc) {
          if (data?.id === audioPlayingId) {
            media.pause();
            this.setState({ ...this.state, audioPlayingId: "" });
          } else {
            const currentVideo = document.getElementById(`new-items-${data?.id}`);
            currentVideo.pause();
            media.play();
            // this.setState({ ...this.state, audioPlayingId: data?.id });
            setAudioPlayingId(data?.id);
          }
        } else {
          playAudio(data?.id)
        }
    }

  return (
    <div className='row'>
        {nfts.map( (item, index) => (
            <div className="d-item col-md-4">
                <div className="nft__item">
                    <div className="author_list_pp">
                        <span onClick={() => goToAuthorCollections(item.authorId)}>                                    
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
                            onClick={() => playMedia(item)}
                        >
                            <span aria-hidden="true" className={item?.id === audioPlayingId ? 'icon_pause' : 'arrow_triangle-right'}></span>
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
                        {/* <div className="nft__item_action">
                            <span onClick={()=> window.open("/#", "_self")}>Purchase on Opensea</span>
                        </div> */}
                        {/* <div className="nft__item_like">
                            <i className="fa fa-heart"></i><span>{item?.likes}</span>
                        </div>                                  */}
                    </div> 
                </div>
        </div>
        ))}
        { nfts.length !== Collections.length &&
            <div className='col-lg-12'>
                <div className="spacer-single"></div>
                <span onClick={() => loadMore()} className="btn-main lead m-auto">Load More</span>
            </div>
        }
    </div>              
    );
}

export default Responsive
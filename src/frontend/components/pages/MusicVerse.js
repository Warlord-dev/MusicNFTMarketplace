import React from 'react';
import Reveal from 'react-awesome-reveal';
import Footer from '../components/footer';

const MusicVerse = function() {
return (
    <div className='musicverse'>
        <section className='jumbotron breadcumb no-bg'>
            <div className='container'>
                <div className='row m-10-hor justify-content-center'>
                    <img src="/img/coming-soon.jpg" style={{ maxWidth: '300px' }} />
                </div>
            </div>
        </section>

        <div className='container mt-4'>
            <h4 style={{ color: '#a74991' }}>Mission</h4>
            <p className='musicverse__text'>
                To disrupt the world of music, art, sports and movies by creating a decentralized Web 3.0 company and virtual Metaverse –
                {' '} <span style={{ color: '#a74991' }}>The MusicVerse</span>
            </p>
            <h4 style={{ color: '#a74991' }} className="mt-3">Origins</h4>
            <div>
                <p className='musicverse__text'>The original mission of The MusicNFT was to inspire artists to create and distribute their best works by combining Music & Digital Art with decentralized finance and NFTs. While this still remains one of the values we’re devoted to, the vision of $MNFT has extended far beyond the music market.</p>

                <p className='musicverse__text'>The growth of the <span>$MNFT</span> concept has been aligned with increased awareness about NFTs and their potential applications and adoptions. It has also become clear that our true mission is not only about facilitating a more efficient exchange of digital music but also creating a decentralized forum for digital content creators and users as a whole.</p>

                <p className='musicverse__text'>The growth of the <span>$MNFT</span> concept has been aligned with increased awareness about NFTs and their potential applications and adoptions. It has also become clear that our true mission is not only about facilitating a more efficient exchange of digital music but also creating a decentralized forum for digital content creators and users as a whole. That is how the idea of ‘MusicVerse’ emerged. The name represents an abbreviation made from “The MusicNFT Universe”, a concept created as a 3D, web3.0 exhibition space and interaction environment dedicated to digital art, content creators, the DEFI community and gamers.</p>
            </div>
        </div>
        
      <Footer />
    </div>
);
}

export default MusicVerse ;
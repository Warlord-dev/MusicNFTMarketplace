import React from 'react';
import Reveal from 'react-awesome-reveal';
import Footer from '../components/footer';

const Staking = function() {

return (
    <div>
        <section className='jumbotron breadcumb no-bg'>
            <div className='container'>
                <div className='row m-10-hor'>
                <div className='col-12'>
                    <h1 className='text-center'>Staking</h1>
                </div>
                </div>
            </div>
        </section>

        <div className='container row mt-4' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="col-md-6 mb-3">
                <h2>
                STAKE YOUR $MNFT AND
                <span className='colorful'> EARN UP TO 150%</span>
                {' '}APY!
                </h2>
            </div>

            <div className="col-md-6 mb-3">
            THE $MNFT is the music industry’s solution. THE $MNFT is using blockchain technologies to radically reorganize the entire international music economy and prioritize the industry’s key players.
            </div>
        </div>

        <div className='container row' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="col-md-6 mb-3">
                <div className="feature-box f-boxed style-3">
                    <Reveal className='onStep'delay={0} duration={600} triggerOnce>
                        <i className="bg-color-2 i-boxed icon_wallet"></i>
                    </Reveal>
                    <div className="text">
                      <Reveal className='onStep'delay={100} duration={600} triggerOnce>
                        <h4 className="">APY 150%</h4>
                      </Reveal>
                      <Reveal className='onStep'delay={200} duration={600} triggerOnce>
                        <p className="">Lock: 5 days</p>
                        <p className="">Full maturity period: 20 days</p>
                      </Reveal>
                    </div>
                    <div className='wrapper-staking'>
                        <div className='wrapper-staking__button'>STAKING</div>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>
            
            <div className="col-md-6 mb-3">
                <div className="feature-box f-boxed style-3">
                  <Reveal className='onStep'delay={0} duration={600} triggerOnce>
                    <i className="bg-color-2 i-boxed icon_wallet"></i>
                  </Reveal>
                    <div className="text">
                      <Reveal className='onStep'delay={100} duration={600} triggerOnce>
                        <h4 className="">APY 75%</h4>
                      </Reveal>
                      <Reveal className='onStep'delay={200} duration={600} triggerOnce>
                        <p className="">Lock: 10 days</p>
                        <p className="">Full maturity period: 20 days</p>
                      </Reveal>
                    </div>
                    <div className='wrapper-staking'>
                        <div className='wrapper-staking__button'>STAKING</div>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>

        </div>

        <div className='container row' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="col-md-6 mb-3">
                <h2>WHAT IS STAKING?</h2>
            </div>

            <div className="col-md-6 mb-3">
                <div>Staking is the process of holding tokens in a cryptocurrency wallet to support the operations of a network.</div>

                <div>Participants are rewarded for depositing and holding coins, with constant guaranteed time-based returns. Rewards are calculated based on staking time: the longer you stake, the more you earn.</div>
            </div>
        </div>
        
      <Footer />
    </div>
);
}

export default Staking ;
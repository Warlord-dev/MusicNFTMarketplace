import React, { useState } from 'react';
import ColumnNewThreeCol from '../components/ColumnNewThreeCol';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { CURRENCIES, STATUSES, TYPES } from '../../data/Collections';

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


const Explore = (props) => {
    const [ statuses, setStatuses ] = useState([]);
    const [ types, setTypes ] = useState([]);
    const [ currencies, setCurrencies ] = useState([]);

    const handleChangeStatus = (e) => {
        if (statuses.includes(e.target.value)) {
            setStatuses(statuses.filter(s => s !== e.target.value ));
        } else {
            setStatuses([ ...statuses, e.target.value ]);
        }
    }

    const handleChangeTypes = (e) => {
        if (types.includes(e.target.value)) {
            setTypes(types.filter(s => s !== e.target.value ));
        } else {
            setTypes([ ...types, e.target.value ]);
        }
    }

    const handleChangeCurrency = (e) => {
        if (currencies.includes(e.target.value)) {
            setCurrencies(currencies.filter(s => s !== e.target.value ));
        } else {
            setCurrencies([ ...currencies, e.target.value ]);
        }
    }

    return (
        <div>
            <GlobalStyles/>
            <section className='container'>
                    <div className='row'>
                    <div className="spacer-double"></div>

                    <div className='col-md-3'>

                        <div className="item_filter_group">
                            <h4>Status</h4>
                            <div className="de_form">
                                <div className="de_checkbox">
                                    <input id="buy" name="buy" type="checkbox" value={STATUSES.BUY_NOW} onClick={handleChangeStatus} />
                                    <label htmlFor="buy">Buy Now</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="onauction" name="onauction" type="checkbox" value={STATUSES.ON_AUCTION} onClick={handleChangeStatus} />
                                    <label htmlFor="onauction">On Auction</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="offers" name="offers" type="checkbox"  value={STATUSES.OFFER} onClick={handleChangeStatus} />
                                    <label htmlFor="offers">Offer</label>
                                </div>

                            </div>
                        </div>

                        <div className="item_filter_group">
                            <h4>Items Type</h4>
                            <div className="de_form">
                                <div className="de_checkbox">
                                    <input id="sitems" name="sitems" type="checkbox" value={TYPES.SIGNLE} onClick={handleChangeTypes} />
                                    <label htmlFor="sitems">Single Items</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="bundles" name="bundles" type="checkbox" value={TYPES.BUNDLES} onClick={handleChangeTypes} />
                                    <label htmlFor="bundles">Bundles</label>
                                </div>

                            </div>
                        </div>

                        <div className="item_filter_group">
                            <h4>Currency</h4>
                            <div className="de_form">
                                <div className="de_checkbox">
                                    <input id="bnb" name="bnb" type="checkbox" value={CURRENCIES.BNB} onClick={handleChangeCurrency} />
                                    <label htmlFor="bnb">BNB</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="eth" name="eth" type="checkbox" value={CURRENCIES.ETH} onClick={handleChangeCurrency} />
                                    <label htmlFor="eth">ETH</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="mnft" name="mnft" type="checkbox" value={CURRENCIES.MNFT} onClick={handleChangeCurrency} />
                                    <label htmlFor="mnft">$MNFT</label>
                                </div>

                            </div>
                        </div>

                        {/* <div className="item_filter_group">
                            <h4>Collections</h4>
                            <div className="de_form">
                                <div className="de_checkbox">
                                    <input id="abstract" name="abstract" type="checkbox" value="abstract"/>
                                    <label htmlFor="abstract">Abstraction</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="paterns" name="paterns" type="checkbox" value="paterns"/>
                                    <label htmlFor="paterns">Patternlicious</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="skecth" name="skecth" type="checkbox" value="skecth"/>
                                    <label htmlFor="skecth">Skecthify</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="cartoon" name="cartoon" type="checkbox" value="cartoon"/>
                                    <label htmlFor="cartoon">Cartoonism</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="virtualand" name="virtualand" type="checkbox" value="virtualand"/>
                                    <label htmlFor="virtualand">Virtuland</label>
                                </div>

                                <div className="de_checkbox">
                                    <input id="pappercut" name="pappercut" type="checkbox" value="pappercut"/>
                                    <label htmlFor="pappercut">Papercut</label>
                                </div>

                            </div>
                        </div> */}

                    </div>

                    <div className="col-md-9">
                        <ColumnNewThreeCol
                            types={types}
                            statuses={statuses}
                            currencies={currencies}
                        />
                    </div>
                    </div>
                </section>


            <Footer />
            </div>
    )
};
export default Explore;
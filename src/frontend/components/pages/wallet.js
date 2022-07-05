import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setWalletAccount } from "../../store/reducer/walletAccountSlice";
import WalletComponent from '../components/wallet';
import Footer from '../components/footer';


const Wallet= () => {
    const walletAccount = useSelector((state) => state.walletAccount);
    const dispatch = useDispatch();

    const connectToMetamask = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Account", accounts);
            dispatch(setWalletAccount({ address: accounts[0]}));
        } catch (error) {
        }
    }

    return (
    <div>
        <section className='jumbotron breadcumb no-bg' >
        <div className='mainbreadcumb'>
            <div className='container'>
            <div className='row m-10-hor'>
                <div className='col-12'>
                <h1 className='text-center'>Wallet</h1>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className='container'>
            <WalletComponent connectToMetamask={connectToMetamask}/>
        </section>

        <Footer />
    </div>
    )
};
export default Wallet;
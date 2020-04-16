import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <>
            <Header/>
            <Banner/>
            <Footer/>
        </>
    );
};

export default Home;
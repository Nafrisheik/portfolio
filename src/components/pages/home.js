import '../../App.css'
import MainView from '../MainView';
import React from 'react'
import Cards from '../Cards.js';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <MainView></MainView>
        <Cards></Cards>
        <Footer/>
        </>
    )
}

export default Home

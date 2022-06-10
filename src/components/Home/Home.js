import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Banner from './Banner';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
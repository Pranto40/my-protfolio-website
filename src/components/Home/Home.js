import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Banner from './Banner';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
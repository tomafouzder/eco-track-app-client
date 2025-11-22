import React from 'react';
import Hero from '../Hero/Hero';
import MyContainer from '../../components/Navbar/MyContainer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MyContainer>
                <h4>Home</h4>
            </MyContainer>
        </div>
    );
};

export default Home;
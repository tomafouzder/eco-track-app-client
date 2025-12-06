import React from 'react';
import errorImage from "../../assets/error-404.png"
import MyContainer from '../../components/Navbar/MyContainer';

const ErrorPage = () => {
    return (
        <div className='bg-gray-800 flex justify-center items-center  text-center min-h-screen py-10 '>
            <MyContainer className='  bg-gray-800 shadow-2xl '>
                <figure className='flex justify-center items-center'>
                    <img src={errorImage} alt="" />
                </figure>
                <h2 className='text-3xl font-bold pt-2 text-gray-300'>Oops! You're lost.</h2>
                <p className='text-xl font-semibold pt-2 text-gray-300'>The page you are looking for was not found.</p>

            </MyContainer>
        </div>
    );
};

export default ErrorPage;
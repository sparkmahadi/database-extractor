import React from 'react';
import InputForm from './InputForm';

const Home = () => {
    return (
        <div className=''>
            <h2 className='text-center text-xl xl:text-3xl font-semibold pt-5 pb-3 xl:pt-10'>Database Generator 3.0</h2>
            <p className='md:text-lg px-5 text-center pb-5'>The site will generate a dynamic PDF based on the field below and provide a download link with preview.</p>
            <InputForm></InputForm>
        </div>
    );
};

export default Home;
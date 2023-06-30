import React from 'react';
import illustration from '../../assets/hero-illustration.svg';

const Hero = () => {
    return (
        <section className='text-center space-y-5 p-5 py-10' id='home'>
            <h1 className='font-source-pro text-4xl font-bold'>HI, I'M MARGUB. I'M A FRONT-END DEVELOPER</h1>
            <p className=' font-extralight text-xl'>I love to make things clean And attractive. Love to learn everyday</p>
            <a href='resume.pdf' download className='inline-block border-primary border-2 px-5 py-3 rounded-md bg-slate-900 bg-opacity-90 text-white font-semibold font-source-pro uppercase'>Download Resume</a>
            <img src={illustration} alt="hero-illustration" className=' max-w-lg mx-auto'/>
        </section>
    );
};

export default Hero;
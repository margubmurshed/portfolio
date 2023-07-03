import React from 'react';
import illustration from '../../assets/hero-illustration.svg';
import { Slide } from 'react-awesome-reveal';

const Hero = () => {
    return (
        <section className='text-center space-y-5 p-5 py-10' id='home'>
            <Slide triggerOnce direction='left' duration={400}>
            <h1 className='font-source-pro text-4xl font-bold text-slate-900'>HI, I'M MARGUB. I'M A FRONT-END DEVELOPER</h1>
            </Slide>
            <Slide triggerOnce direction='left' duration={600}>
            <p className=' font-extralight text-xl'>I love to make things clean And attractive. Love to learn everyday</p>
            </Slide>
            <Slide triggerOnce direction='left' duration={800}>
            <a href='resume.pdf' download className='inline-block border-primary border-2 px-5 py-3 rounded-md bg-slate-900 bg-opacity-90 text-white font-semibold font-source-pro uppercase'>Download Resume</a>
            </Slide>
            <Slide triggerOnce direction='left' duration={1000}>
            <img src={illustration} alt="hero-illustration" className='w-full max-w-lg mx-auto'/>
            </Slide>

        </section>
    );
};

export default Hero;
import React from "react";
import photo from "../../assets/myphoto.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="p-5 py-10 bg-gray-50" id="about">
      <div className="container mx-auto lg:flex gap-5 lg:w-3/4">
        <div>
          <img
            src={photo}
            alt="margub murshed photo"
            className="max-w-[200px] mx-auto border-primary border-2 rounded-md"
          />
        </div>
        <Slide triggerOnce direction="right" duration={400}>
          <div className="space-y-2 ">
            <h2 className="font-source-pro text-3xl font-semibold uppercase text-slate-900 mt-5 text-center lg:mt-0 lg:text-left">
              About Me
            </h2>
            <p className="text-gray-700 font-light">
              Hello, I am Margub Murshed. I am a MERN Stack Developer. I am
              currently studying in 11th Grade at Government Laboratory College,
              Dhaka. I am a confident, enthusiastic, and passionate developer
              eager to learn and grow every day in the field of Web Development. 
              I excel in JavaScript, React, MongoDB, Express, and Node. 
              <br /><br />
              In 2023,
              I completed 6 months long training in Web Development from
              Programming Hero which is a leading e-learning platform in
              Bangladesh. I have always been fascinated by transforming creative
              ideas into visually appealing functional and user-friendly
              websites. I love traveling and exploring. As a developer, I keep
              exploring different technologies and try to keep myself updated
              with the latest industry trends.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;

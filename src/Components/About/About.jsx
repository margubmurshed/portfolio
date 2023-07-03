import React from "react";
import photo from "../../assets/myphoto.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="p-5 py-10 bg-gray-50" id="about">
      <div className="container mx-auto lg:flex gap-5 lg:w-3/4">
        <img src={photo} alt="margub murshed photo" className="max-w-[200px] mx-auto border-primary border-2 rounded-md"/>
        <Slide triggerOnce direction='right' duration={400}>
        <div className="space-y-2">
          <h2 className="font-source-pro text-3xl font-semibold uppercase text-slate-900 mt-5 text-center lg:mt-0 lg:text-left">About Me</h2>
          <p className="text-gray-700 font-light">
            Hi, I'm Margub Murshed, a full stack web developer. Web design &
            development is my passion. I love to explore new tech things. I'm
            very passionate and dedicated to my work. I have expertise in
            Front-End and Back-End Web development too. I can design a website
            fully responsive & dynamic as per requirment. I enjoy every step of
            the design & development process from discussion and collaboration.
            I have experience in React JS, Next JS, Node JS, MongoDB, Experess,
            Tailwind CSS, Material UI, Bootstrap etc.
          </p>
        </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;

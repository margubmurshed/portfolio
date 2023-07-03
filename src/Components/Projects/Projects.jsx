import React from "react";
import project1img from "../../assets/screencapture-cricketangon-school-web-app-2023-07-03-17_46_48.png";
import project2img from "../../assets/screencapture-speedo-cars-web-app-2023-07-03-17_49_20.png";
import project3img from "../../assets/screencapture-tasty-recipes-margub-web-app-2023-07-03-17_50_27.png";
import {BsGithub, BsGlobe} from 'react-icons/bs';

const Projects = () => {
  return (
    <section className="container mx-auto p-5 py-20" id="projects">
      <h2 className="font-source-pro text-4xl font-bold uppercase text-slate-900 text-center">
        My Projects
      </h2>
      <p className="text-center my-3">
        Here are a few design projects I've worked on recently.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
        <div className="group">
          <img
            src={project1img}
            alt="project 1 img"
            className="h-[200px] w-full object-cover object-top hover:object-bottom transition-all duration-[10000ms] border-2 border-primary rounded-md"
          />
          <div className="shadow-lg p-3 ">
            <h2 className="font-semibold text-xl">CA Cricket School</h2>
            <ul className=" list-disc ml-5 text-sm mt-2">
              <li>
                <span className="font-medium text-red-900">
                  Popular Classes and Instructors:
                </span>{" "}
                Discover the most popular classes and instructors based on the
                number of students.
              </li>
              <li>
                <span className="font-medium text-red-900">
                  Class Selection:
                </span>{" "}
                Easily select classes of interest using the "select" button
                available on each class card.
              </li>
              <li>
                <span className="font-medium text-red-900">
                  Student Dashboard:
                </span>{" "}
                A personalized dashboard with different views based on user
                roles.
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-1">
                <a href="https://github.com/margubmurshed/ca-school-client" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Client Side Code</span></button>
                </a>
                <a href="https://github.com/margubmurshed/ca-school-server" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Server Side Code</span></button>
                </a>
                <a href="https://cricketangon-school.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-red-500 p-3 rounded-md"><BsGlobe size={20}/> <span>Live Link</span></button>
                </a>
            </div>
          </div>
        </div>
        <div className="group">
          <img
            src={project2img}
            alt="project 1 img"
            className="h-[200px] w-full object-cover object-top hover:object-bottom transition-all duration-[10000ms] border-2 border-primary rounded-md"
          />
          <div className="shadow-lg p-3 ">
            <h2 className="font-semibold text-xl">CA Cricket School</h2>
            <ul className=" list-disc ml-5 text-sm mt-2">
              <li>
                <span className="font-medium text-red-900">
                  Shop by Category:
                </span>{" "}
                You can see the catagories like tabs in home page and selecting
                one of them will load category wise products
              </li>
              <li>
                <span className="font-medium text-red-900">
                  Authentication:
                </span>{" "}
                You can signup and login using your email and password. Also you
                can use google login.
              </li>
              <li>
                <span className="font-medium text-red-900">My Toys Page:</span>{" "}
                My Toys page contains the toys added by you. No one can see the
                toys you added. Also you can update and delete your toys.
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-1">
                <a href="https://github.com/margubmurshed/speedo-cars-client" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Client Side Code</span></button>
                </a>
                <a href="https://github.com/margubmurshed/speedo-cars-server" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Server Side Code</span></button>
                </a>
                <a href="https://speedo-cars.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-red-500 p-3 rounded-md"><BsGlobe size={20}/> <span>Live Link</span></button>
                </a>
            </div>
          </div>
        </div>
        <div className="group">
          <img
            src={project3img}
            alt="project 1 img"
            className="h-[200px] w-full object-cover object-top hover:object-bottom transition-all duration-[10000ms] border-2 border-primary rounded-md"
          />
          <div className="shadow-lg p-3 ">
            <h2 className="font-semibold text-xl">Tasty Recipes</h2>
            <ul className=" list-disc ml-5 text-sm mt-2">
              <li>
                <span className="font-medium text-red-900">All Chefs:</span>A
                user can view all the available chefs on homepage and view
                recipes clicking on View Recipes Button.
              </li>
              <li>
                <span className="font-medium text-red-900">
                  Login/Register:
                </span>
                A user can login/register and see content inside view recipes
                page.
              </li>
              <li>
                <span className="font-medium text-red-900">
                  Protected Page:
                </span>
                View Recipes page is protected and user cannot see the contents
                inside view recipes unless he does login/register.
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-1">
                <a href="https://github.com/margubmurshed/tasty-recipes-client" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Client Side Code</span></button>
                </a>
                <a href="https://github.com/margubmurshed/tasty-recipes-server" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-black bg-opacity-90 p-3 rounded-md"><BsGithub size={20}/> <span> Server Side Code</span></button>
                </a>
                <a href="https://tasty-recipes-margub.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="flex gap-3 items-center w-full justify-center text-white bg-red-500 p-3 rounded-md"><BsGlobe size={20}/> <span>Live Link</span></button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

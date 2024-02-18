import React, { useContext } from "react";

import Monkey from "../img/portfolio/monkey.png";
import Bird from "../img/portfolio/bird.png";
import Eagle from "../img/portfolio/eagle.png";
import Dog from "../img/portfolio/dog.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

import "./portfolio.css";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-start
      gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet,
              <b> consectetur adipiscing </b>elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              <br />
              <br />
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              to={"/contact"}
              className="btn mb-[30px]
            mx-auto lg:mx-0"
            >
              Hire me
            </Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Dog}
                alt=""
              ></img>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Eagle}
                alt=""
              ></img>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Bird}
                alt=""
              ></img>
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
            bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px]
              hover:scale-110 transition-all duration-500"
                src={Monkey}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-8">
        <h1 className="h1 mb-10">Mes dernières photos</h1>
        <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            <img src={Bird} alt="Gallery image 1" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--2">
            <img src={Monkey} alt="Gallery image 2" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img src={Eagle} alt="Gallery image 3" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img src={Dog} alt="Gallery image 4" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--5">
            <img src={Bird} alt="Gallery image 5" class="gallery__img" />
          </figure>
          <figure class="gallery__item gallery__item--6">
            <img src={Monkey} alt="Gallery image 6" class="gallery__img" />
          </figure>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

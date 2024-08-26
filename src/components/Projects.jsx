import React from "react";
import "../css/projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restarauntFinder from "../images/projects/restaraunt-finder.png";
import hangman from "../images/projects/hangman.png";
import fnb from "../images/projects/fnb.png";
import jellyJam from "../images/projects/JellyJam.png";
import alienInvasion from "../images/projects/alien-invasion-screenshot.png";
import { Link } from "react-router-dom";

import Slider from "react-slick";

function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <h3 className="abril-fatface-regular projectTitle">Projects</h3>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          <div className="box">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://restaurant-finder2.onrender.com/"
            >
              <img
                src={restarauntFinder}
                style={{ width: "100%", height: "auto" }}
                className="projectImg"
                alt="home page of restaraunt finder app"
              ></img>
            </Link>
            <h3 className="fontColorBlack lato-regular">Restaraunt Finder</h3>
            <h5 className="lato-regular projectDescription">
              Restaurant search app and suggestion generator. Utilizes React
              Redux, Django Rest Framework, PostgreSQL database, CSS3 and
              geolocation. Led a team through a 5 day sprint.
            </h5>
          </div>
          <div className="box">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://hangman-team58.onrender.com/"
            >
              <img
                src={hangman}
                style={{ width: "100%", height: "auto" }}
                className="projectImg"
                alt="home page of hangman app"
              ></img>
            </Link>
            <h3 className="fontColorBlack lato-regular">Hangman</h3>
            <h5 className="lato-regular projectDescription">
              Classic Hangman game, complete with leaderboard and challenge a
              friend. Utilizes React Redux, Django Rest Framework, PostgreSQL
              database, CSS3. Completed with a team I led in a five day sprint.
            </h5>
          </div>
          <div className="box">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://fnb-43pm.onrender.com/"
            >
              <img
                src={fnb}
                style={{ width: "100%", height: "auto" }}
                className="projectImg"
                alt="home page of Food Not Bombs redesign app"
              ></img>
            </Link>
            <h3 className="fontColorBlack lato-regular">Food Not Bombs</h3>
            <h5 className="lato-regular projectDescription">
              Total Frontend redesign and rebrand utilizing React.js. Completed
              for the GA Winter Hackathon with a cross-functional team of 4 UX
              designers and 3 total developers in a 5 day sprint.
            </h5>
          </div>
          <div className="box">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://amjann.github.io/alien-invasion-game/"
            >
              <img
                src={alienInvasion}
                style={{ width: "100%", height: "auto" }}
                className="projectImg"
                alt="Alien Invasion Game"
              ></img>
            </Link>
            <h3 className="fontColorBlack lato-regular">Alien Invasion</h3>
            <h5 className="lato-regular projectDescription">
              Game created using Phaser.js and React Vite. JSX and CSS used for
              additional UI components.
            </h5>
          </div>
          <div className="box">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://jellyjam.netlify.app/"
            >
              <img
                src={jellyJam}
                style={{ width: "100%", height: "auto" }}
                className="projectImg"
                alt="home page of Jelly Jam app"
              ></img>
            </Link>
            <h3 className="fontColorBlack lato-regular">Jelly Jam</h3>
            <h5 className="lato-regular projectDescription">
              FullStack Spotify Clone app developed with a team in a week
              Sprint. Utilizes the MERN stack.
            </h5>
          </div>
        </Slider>

        <h4 className="lato-regular">created by Amber Jankowski</h4>
      </div>
    </>
  );
}

export default Projects;

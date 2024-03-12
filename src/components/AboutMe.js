import React from "react";
import "../css/aboutMe.css";
import amber from "../images/amber-j.jpeg";

function AboutMe() {
  return (
    <div className="imgAboutContainer">
      <div className="myImageContainer">
        <img
          className="myImage"
          src={amber}
          alt="Amber Jankowski head shot"
        ></img>
      </div>
      <div className="aboutMeContainer">
        <h1 className="abril-fatface-regular fontSize name">My Story</h1>
        <h3 className="lato-regular paragraph">
          <span className="firstLetter">I</span> successfully completed the
          Full-stack Software Engineering Immersive program at General Assembly,
          an intensive 24-week, 450+ hour curriculum, graduating in July 2022.
          Throughout my journey, I actively led and participated in various
          hackathon events. Notably, I led a team in a competition with over
          1,500 participants, advancing to the fourth week out of five and
          securing a position among the top 80 software engineers.
        </h3>
        <h3>
          _________________________________________________________________
        </h3>
        <h3 className="lato-regular paragraph">
          <span className="firstLetter">P</span>resently, I am an apprentice at
          Underdog Developers, where I am fortunate to be mentored by some of
          the industry's finest professionals. Engaging in challenging
          one-on-one paired programming sessions with senior engineers from
          leading companies has been an invaluable aspect of my learning
          experience.
        </h3>
      </div>
    </div>
  );
}

export default AboutMe;

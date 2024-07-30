import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="image" className="orbitalImage" />
      <div className="left">
        <h1 className="hometitle">RAJAN AI</h1>
        <h3>SuperCharge your creativity and Productivity</h3>
        <h4 className="homedescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia ipsa
          nemo quod accusantium. Eligendi ut.
        </h4>
        <Link to="dashboard" className="getStarted">
          Get started
        </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chats">
            <img src="/human1.jpeg" alt="image" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "human:We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "Boat: We produce food for Guinea Pigs",
                1000,
                "human2: We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              omitDeletionAnimation={true}
              style={{ fontSize: "1.4em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

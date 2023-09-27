import React from "react";
import "./Main.css";
import cc2 from "../assets/images/cc head2.png";
// import ccHi from "../assets/images/cc hi gif.gif";
// import nmcgImg from "../assets/images/NMCG name.png";
import nmcgImg from "../assets/images/nmcg hindi big.jpeg";
import BgGif from "../assets/videos/cc-vid-cut.gif";
import CardMain from "../components/CardMain";

export default function Main() {
  return (
    <>
      <div className="video-background-container">
        {/* <video
          autoPlay
          loop
          muted
          className="video video-background"
          style={{
            backgroundSize: "contain",
            width: "100%",
            opacity: "0.5",
            position: "absolute",
          }}
        >
          <source src={BgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img className="video-background-container" src={BgGif} alt="" />

        <div className="content d-flex justify-content-center">
          <CardMain
            headerText={"Walkthrough"}
            title={"NMCG"}
            img={nmcgImg}
            desc={"Description of Walkthrough of NMCG"}
            btnText={"Access Walkthrough"}
            link="https://nmcg-walkthrough.vercel.app/"
            footText={"https://nmcg.nic.in/"}
          />
          <CardMain
            headerText={"ChatBot"}
            title={"Chacha Chaudary"}
            img={cc2}
            // img={ccHi}
            desc={"Description of Chatbot"}
            btnText={"Ask Questions!"}
            link="./chatbot"
            footText={"Chacha Chaudary"}
          />
        </div>
      </div>
    </>
  );
}

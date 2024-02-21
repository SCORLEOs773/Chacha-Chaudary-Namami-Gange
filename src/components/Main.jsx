import React from "react";
import "./Main.css";
import cc2 from "../assets/images/cc head2.png";
import nmcgImg from "../assets/images/nmcg hindi big.jpeg";
import BgGif from "../assets/videos/cc-vid-cut.gif";
import CardMain from "./CardMain";
// import BackgroundSlider from "react-background-slider";
// import g1 from "../assets/gallery/g1.jpg";
// import g2 from "../assets/gallery/g2.jpg";
// import g3 from "../assets/gallery/g3.jpg";

export default function Main() {
  return (
    <>
      <div className="video-background-container">
        <img className="video-background-container" src={BgGif} alt="" />
        {/* <BackgroundSlider images={[g1, g2, g3]} duration={8} transition={2} />; */}
        <div className="content d-flex flex-column flex-md-row justify-content-center gap-5">
          <CardMain
            title="NMCG Walkthrough"
            img={nmcgImg}
            btnText="Access Walkthrough"
            link="https://nmcg-walkthrough.vercel.app/"
            footText="https://nmcg.nic.in/"
          />
          <CardMain
            title="Chacha Chaudhary ChatBot"
            img={cc2}
            // img={ccHi}
            btnText="Ask Questions!"
            link="./chatbot"
            footText="Chacha Chaudhary"
          />
        </div>
      </div>
      {/* <div className="content d-flex justify-content-center gap-5">
        <CardMain
          title="NMCG Walkthrough"
          img={nmcgImg}
          btnText="Access Walkthrough"
          link="https://nmcg-walkthrough.vercel.app/"
          footText="https://nmcg.nic.in/"
        />
        <CardMain
          title="Chacha Chaudhary ChatBot"
          img={cc2}
          // img={ccHi}
          btnText="Ask Questions!"
          link="./chatbot"
          footText="Chacha Chaudary"
        />
      </div> */}
    </>
  );
}

import React from "react";
import img1 from "../assets/gallery/g3.jpg";
import img3 from "../assets/gallery/g2.jpg";
import img5 from "../assets/gallery/g1.jpg";

const Gallery = () => {
  return (
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={img1}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src={img3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={img5}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />

        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
  );
};

export default Gallery;

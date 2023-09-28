import React from "react";
import CarouselCard from "./CarouselCard";
import sukhad from "../assets/images/sukhad.jpeg";
import vyom from "../assets/images/vyom.png";
import deepanshi from "../assets/images/deepanshi.jpeg";
import ritvik from "../assets/images/ritvik.png";
import pulkit from "../assets/images/pulkit.jpg";
import muskan from "../assets/images/muskan.jpg";

export default function About() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner bg-dark-subtle">
          <h2 className="font-bold text-center mt-4 py-2 text-light text-bg-dark">
            OUR TEAM
          </h2>
          <div className="carousel-item active">
            <CarouselCard cImg={sukhad} cName={"SUKHAD SHARMA"} />
          </div>
          <div className="carousel-item">
            <CarouselCard cImg={vyom} cName={"VYOM JAIN"} />
          </div>
          <div className="carousel-item">
            <CarouselCard cImg={deepanshi} cName={"DEEPANSHI DEY"} />
          </div>
          <div className="carousel-item">
            <CarouselCard cImg={ritvik} cName={"RITVIK SHARMA"} />
          </div>
          <div className="carousel-item">
            <CarouselCard cImg={pulkit} cName={"PULKIT KHATTER"} />
          </div>
          <div className="carousel-item">
            <CarouselCard cImg={muskan} cName={"MUSKAN AGRAWAL"} />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

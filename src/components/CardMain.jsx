import React from "react";
import { Link } from "react-router-dom";

export default function CardMain(props) {
  return (
    <div>
      <div
        className="card text-center mx-3"
        style={{
          height: "470px",
          width: "400px",
          opacity: "0.85",
          color: "crimson",
          // marginTop: "-10px",
        }}
      >
        <div className="card-body" style={{ fontFamily: "Tillana" }}>
          <h5 className="card-title my-3">{props.title}</h5>
          <img src={props.img} height={"300px"} alt="" />
          <p className="card-text my-3">{props.desc}</p>
          <Link to={props?.link || "#"} className="btn btn-primary">
            {props.btnText}
          </Link>
        </div>
        <div className="card-footer text-body-secondary">{props.footText}</div>
      </div>
    </div>
  );
}

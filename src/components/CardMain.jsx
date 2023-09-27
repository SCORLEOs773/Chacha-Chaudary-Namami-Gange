import React from "react";

export default function CardMain(props) {
  return (
    <div>
      <div
        class="card text-center mx-3"
        style={{ height: "570px", width: "400px" }}
      >
        <div class="card-header">{props.headerText}</div>
        <div class="card-body">
          <h5 class="card-title my-3">{props.title}</h5>
          <img src={props.img} height={"300px"} alt="" />
          <p class="card-text my-3">{props.desc}</p>
          <a href={props?.link || "#"} class="btn btn-primary">
            {props.btnText}
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function CarouselCard(props) {
  return (
    <div>
      <center className="pb-5" style={{ marginRight: "30px" }}>
        <div
          className="card bg-primary-subtle m-5"
          style={{
            width: "900px",
            height: "450px",
            border: "2.5px solid crimson",
          }}
        >
          <div className="card-img-overlay text-dark text-center">
            <img
              src={props.cImg}
              className="rounded-circle my-4"
              alt=""
              style={{
                border: "2.5px solid dodgerblue",
                height: "270px",
                width: "270px",
              }}
            />
            <h3 className="card-title text-danger my-3">{props.cName}</h3>
            {/* <h6 className="text-muted my-2">
                    {props.cTitle}
                  </h6> */}
            {/* <p className="card-text my-4">
                    {props.cDesc}
                  </p> */}
          </div>
        </div>
      </center>
    </div>
  );
}

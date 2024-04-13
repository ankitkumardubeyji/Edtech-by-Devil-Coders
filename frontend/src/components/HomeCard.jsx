import React from "react";
import Ot1 from "../images/OT1.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="card shadow-lg rounded" style={{ width: "18rem" }}>
        <img src={Ot1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1>Investment</h1>
          <p className="card-text">
            
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="m-1 play">
              <FaRegCirclePlay />
            </div>
            <button type="button" className="btn btn-primary">
              Read More..
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
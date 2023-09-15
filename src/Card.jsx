import React from "react";

const Card = (props) => {
  return (
     
    <>
    
      <div className={props.style} style={{ border: "none" }}>
        <div className="card-body  border shadow col-12 col-md-11  mb-4">
          <img className="card-img col-md-12 col-12" src={props.image} alt="" />
          <h6 className="fw-bold text-dark px-3  mt-4"> {props.name}</h6>
          <p className="card-text mt-4 pb-5 text-secondary  px-3 fw-bold">
            {props.paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

import React, { useState } from 'react';

export default function Carousal() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade flex flex-col items-center justify-center  relative" style={{maxHeight:"500px"}}
      data-bs-ride="carousel"
    >
      {/* Search Input */}
      
      

      {/* Carousel Items */}
      <div className="carousel-inner w-full h-full " style={{"objectFit":"contain !important" }}>
     
        <div className="carousel-item active">
          <img src="Eggs.jpg" className="d-block w-100 object-fit" style={{"filter":"brightness(30%)"}} alt="Eggs" />
        </div>
        <div className="carousel-item">
          <img src="Food.jpg" className="d-block w-100 object-fit" style={{"filter":"brightness(30%)"}} alt="Food" />
        </div>
        <div className="carousel-item">
          <img src="Eggs.jpg" className="d-block w-100 object-fit" style={{"filter":"brightness(30%)"}} alt="Eggs" />
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls flex justify-between w-full">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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

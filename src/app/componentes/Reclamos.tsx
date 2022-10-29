import React, { Component } from "react";
import video from "../../assets/video/vd1.pm4";

export class miVideo extends Component {
  render() {
    return (
      <div className="miVideo">
      <p>hello</p>
      <video src={video} width="750" height="500" controls>
     </video>
      </div>
    );
  }   
}




/*
import construccion from "../../assets/images/sitio-construccion02.jpg";
export const Reclamos = ()=>{
    return(
        <div className="container mt-5">
      <div className="d-flex-md-fill  justify-content-center">
        <img src={construccion} alt="Sitio en construccion" />
      </div>
    </div>
    );
};
 */
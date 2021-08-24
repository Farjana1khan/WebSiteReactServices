import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg";
const Common = (props) => {
    return(
        <>
        <section id="header" className="">
        <div className="container-fluid">
        <div className="row">

        <div className="col-13 max-auto">
        <div className="row">

      <div className="col-md-6 pt-5 pt-lg-9 order-8 order-lg-9  mt-4">
      <h4>
      {props.name}

      <strong className="brand-name">  Farjana Khan  </strong>
      </h4>
      
       <h5 className="my-1">
     we are talented developer making website
      </h5> 
    <div className="mt-4">
    <NavLink to={props.visit}
     className="btn-get-started ">
    {props.btname}
    </NavLink>
    </div>
    </div>

<div className="col-lg-6 order-7 order-lg-9  col-md-6 pt-4 pt-lg-7 mt-4 header-img">
<img src={props.imgsrc} 
className="img-fluid animated  pt-lg-9 " 
alt="Common img" />

</div>
</div>
</div>
</div>
</div>
 </section>
        </>
    );
};
export default Common;
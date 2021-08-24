import React from "react";
//import { NavLink } from "react-router-dom";
import web from "../src/images/img10.jpg";
import Common from "./Common";

const About = () => {
    return(
        <>

   <Common  
   name="Welcome to About page" 
   imgsrc={web} 
   visit="/contact" 
   btname="Contact Now"
   />
        </>
    );
};
export default About;
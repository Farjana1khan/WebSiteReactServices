import React from "react";
import Common from "./Common";
//import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg";
const Home = () => {
    return(
        <>

   <Common  
   name="Learn React Js With" 
   imgsrc={web} 
   visit="/service" 
   btname="Get Started"
   />
        </>
    );
};
export default Home;
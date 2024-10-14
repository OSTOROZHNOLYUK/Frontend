import React from "react";
import Slider from "./slider/slider"
import Header from "../Header/Header";

 const Mainpage = () => {
    return (
        <>
        <Header/>
        <div className="main">
            <Slider/>
        </div></>
    )
};
export default Mainpage;
import React from "react";
import Slider from "./slider/slider"
import Header from "../Header/Header";
import RequestMapAbout from "./request-map/request-map";
import Mission from "./mission/mission"
import Stats from "./stats/stats";
import Help from "./help/help";

 const Mainpage = () => {
    return (
        <>
        <Header/>
        <div className="main">
            <Slider/>
            <RequestMapAbout/>
            <Mission/>
            <Stats/>
            <Help/>
        </div></>
    )
};
export default Mainpage;
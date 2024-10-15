import React from "react";
import Lukebanner from "./lukebanner.png";
import  Send from './send.png';
import './pages.sccs/pageone.scss';

const PageOne = () => {
    return(
        <div className="banner">
            <h1  className="banner_title">Оcторожно ЛЮК -</h1>
            <p className="banner_text">проект, который помогает предотвращать опасности и спасать жизни, обнаруживая и закрывая открытые люки.</p>
            <img src={Lukebanner} className="banner_img"></img>
            <button className="banner_btn"> Подробнее о проекте <img src={Send}></img> </button>
        </div>
    )
}
export default PageOne;
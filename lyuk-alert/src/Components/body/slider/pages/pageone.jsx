import React from "react";
import Lukebanner from "./lukebanner.png";
import  Send from './send.png';

const PageOne = () => {
    return(
        <div className="banner">
            <h1>Оcторожно ЛЮК -</h1>
            <p>проект, который помогает предотвращать опасности и спасать жизни, обнаруживая и закрывая открытые люки.</p>
            <img src={Lukebanner}></img>
            <button> Подробнее о проекте <img src={Send}></img> </button>
        </div>
    )
}
export default PageOne;
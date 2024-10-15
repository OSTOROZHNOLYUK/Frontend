import React from "react";
import girl from "./girl.png";
import  Send from './send.png';
import './pages.sccs/pagethree.scss';
const PageThree = () => {
    return(
        <div className="pagethree">
            <img src={girl} className="page_girl"/>
            <h2 className="page_title">Открытые люки</h2>
           <p  className="page_text">влияние на безопасность детей и животных </p>
            <button className="page_btn"> Читать статью <img src={Send}></img> </button>
        </div>
    )
}
export default PageThree;
import React from "react";
import girl from "./girl.png";
import  Send from './send.png';

const PageThree = () => {
    return(
        <div className="banner">
            <img src={girl}/>
            <h2>Открытые люки</h2>
           <p>влияние на безопасность детей и животных </p>
            <button> Читать статью <img src={Send}></img> </button>
        </div>
    )
}
export default PageThree;
import React from "react";
import Logo from "../../../Logo";
import chat from "./chat_bubble.png"


const PageTwo = () => {
    return(
        <div className="PageTwo">
            <Logo name="logo-main-black"/>
            <p>Проблема, у которой есть решение </p>
            <button> <img src={chat}/> Сообщить об открытом люке </button>
        </div>
    )
}
export default PageTwo;
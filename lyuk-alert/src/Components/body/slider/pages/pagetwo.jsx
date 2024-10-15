import React from "react";
import Logo from "../../../Logo";
import chat from "./chat_bubble.png";
import './pages.sccs/pagetwo.scss'


const PageTwo = () => {
    return(
        <div className="PageTwo">
            <Logo name="logo-main-black"/>
            <p className="pagetwo_text">Проблема, у которой есть <span className="spantext">решение</span> </p>
            <button className="pagetwo_btn"> <img src={chat}/> Сообщить об открытом люке </button>
        </div>
    )
}
export default PageTwo;
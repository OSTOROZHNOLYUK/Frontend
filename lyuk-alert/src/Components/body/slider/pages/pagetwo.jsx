import React from "react";
import Logo from "../../../Logo";
import chat from "./chat_bubble.png";
import './pages.sccs/pagetwo.scss'
import { Link } from "react-router-dom";


const PageTwo = () => {
    return(
        <div className="PageTwo">
            <Logo name="logo-main-black"/>
            <p className="pagetwo_text">Проблема, у которой есть <span className="spantext">решение</span> </p>
            <Link to={"/Application"}>
            <button className="pagetwo_btn"> <img src={chat}/> Сообщить об открытом люке </button>
            </Link>
        </div>
    )
}
export default PageTwo;
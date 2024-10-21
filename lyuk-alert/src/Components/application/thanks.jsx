import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './application.scss'
import steps from "./steps.png";
import { Link } from "react-router-dom";
const Thanks = () => {
return(
    <div>
    <>
        <Header/>
        <div className="title">
            <h1 className="apply_title">Оставьте заявку об открытом люке</h1>
            <p className="apply_text"> Всего 3 шага – заполнение займет пару минут!</p>
            <img className="steps" src={steps} alt="steps" width="100%"/>
        </div>
            <div className="stepBody"> 
                <h2 className="thanks_Title">Спасибо за заявку</h2>
                <p className="thanks_left_text">Хотите получать уведомления о статусе заявки? </p>
                <p className="thanks_text">Вам придет электронное письмо, когда заявка будет взята в работу, а также когда люк будет закрыт.</p>
                <Link to={'/email'}> <button className="btn_next">Хочу получать новые уведомления</button></Link>
                <Link to={'/'}><button className="btn_back">Не хочу получать новые уведомления</button></Link>
            </div>
      <Footer />
        </>
    </div>
)
}
export default Thanks;




    

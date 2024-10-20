import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './application.scss'

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
            <div className="thanks"> 
                <h2>Спасибо за заявку</h2>
                <p>Хотите получать уведомления о статусе заявки? </p>
                <p>Вам придет электронное письмо, когда заявка будет взята в работу, а также когда люк будет закрыт.</p>
                <button>Хочу получать новые уведомления</button>
                <button>Не хочу получать новые уведомления</button>
            </div>
      <Footer />
        </>
    </div>
)
}
export default Thanks;




    

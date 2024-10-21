import React, { useState } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './application.scss'
import steps from "./steps.png";
import enter from "./steps/enter.png"

const EmailSubscriptionPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Подписка на рассылку:', email);
    setEmail(''); 
    alert('Успешно подключены!'); // Отображение уведомления
    setEmail('');
  };

  return (
    <>
        <Header/>
        <div className="title">
            <h1 className="apply_title">Оставьте заявку об открытом люке</h1>
            <p className="apply_text"> Всего 3 шага – заполнение займет пару минут!</p>
            <img className="steps" src={steps} alt="steps" width="100%"/>
        </div>
    <div className='stepBody'>
      <h1>Куда отправлять уведомления?</h1>
      <form className="formBody" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите вашу электронную почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='email_input'
        />
        <button type="submit" className='btn_submit'>
          Отправить <img src={enter}/>
        </button>
      </form>
    </div>
    <Footer />
        </>
  );
};

export default EmailSubscriptionPage;
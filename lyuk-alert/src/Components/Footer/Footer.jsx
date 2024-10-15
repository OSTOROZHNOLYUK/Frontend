import style from "./Footer.module.scss";
import Logo from "../Logo";
import SvgSelector from "../SvgSelector";
import { Link } from "react-router-dom";

export default function Footer() {
  
  function scrollToTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className={style.footer + " " + "container"}>
      <div className={style.mainpart}>
        <div className={style.logo}>
          <Logo name="logo-white" />
        </div>
        <div className={style.request}>
          <Link to={'/application'}>
          <a href="#">
            Оставить заявку
            <span>
              <SvgSelector name="send" />
            </span>
          </a>
          </Link>
        </div>
        <div className={style.social}>
          <div className={style.telegram}>
            <a href="https://t.me/ostorozhnoluk_bot" target="blank">
              <span>
                <SvgSelector name="tg-white" />
              </span>
              <p>телеграм-бот</p>
            </a>
          </div>
          <div className={style.vk}>
            <a href="https://vk.com/ostorozhnolyuk" target="blank">
              <span>
                <SvgSelector name="vk-white" />
              </span>
              <p>группа вконтакте</p>
            </a>
          </div>
        </div>
        <div className={style.menu}>
          <a href="">Контакты</a>
          <a href="">Хочу помочь</a>
          <a href="">О проекте</a>
        </div>
      </div>
      <hr />
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          <div className={style.terms}>
            <p>Соглашение о конфиденциальности</p>
            <p>Политика обработки персональных данных</p>
            <p>Публичная оферта</p>
          </div>
          <div className={style.copyright}>
            <p>© 2018-2024 LizaAlert — Все права защищены.</p>
          </div>
        </div>
        <div className={style.bottomRight}>
          <div className={style.ontop}>
            <a href="#" onclick={scrollToTop}>
              <SvgSelector name="ontop" />
              <span>В начало</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

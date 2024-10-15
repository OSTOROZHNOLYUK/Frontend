import SvgSelector from "../../SvgSelector";
import style from "./request-map.module.scss";
import lyuk from "./images/lyuk.png";
import lizaAlert from "./images/lizaAlert.png";

export default function RequestMapAbout() {
  return (
    <div className={style.RequestMapAbout + " " + "container"}>
      <div className={style.request}>
        <div className={style.text}>
          <h2>Сообщить о проблеме</h2>
          <p>
            Всего 3 простых шага и ты <br /> поможешь спасти чью-то жизнь или
            предотвратить опасность.
          </p>
        </div>
        <div className={style.roundbutton}>
          <a href="#">
            <SvgSelector name="chat_bubble" />
            <p>
              Сообщить <br /> об открытом люке
            </p>
          </a>
        </div>
      </div>
      <div className={style.map}>
        <div className={style.text}>
          <h2>Все заявки <br /> в одном месте</h2>
          <p>
            Ты можешь посмотреть заявки <br /> об открытых люках в любом городе
            России, узнать подробности и их текущий статус.
          </p>
        </div>
        <div className={style.roundbutton}>
          <a href="#">
            <SvgSelector name="map" />
            <p>Открыть карту</p>
          </a>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.text}>
          <h2>О проекте</h2>
          <p>ЛизаАлерт является создателем и куратором проекта.</p>
          <div className={style.aboutImages}>
            <img src={lizaAlert} alt="lizaAlert" />
            <div className={style.svgcontainer}>
              <SvgSelector name="x" />
            </div>
            <img src={lyuk} alt="lyuk" />
          </div>
          <div className={style.aboutBtn}>
            <a href="#">
              <span>Подробнее</span>
              <span>
                <SvgSelector name="send" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

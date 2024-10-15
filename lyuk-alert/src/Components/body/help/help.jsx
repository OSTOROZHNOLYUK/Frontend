import style from "./help.module.scss";

export default function Help() {
  return (
    <div className={style.help + " " + "container"}>
      <h2>Хочу помочь</h2>
      <div className={style.text}>
        <p>
        Хочешь внести <span>больший вклад</span> в решение проблемы открытых люков?
        </p>
        <p>
        Мы активно <span>набираем волонтёров</span> в нашу команду, а также <span>ищем спонсоров</span> проекта.
        </p>
      </div>
      <div className={style.btns}>
        <a href="#">
          Стать волонтером
        </a>
        <a href="#">
          Стать спонсором
        </a>
      </div>
    </div>
  )
}
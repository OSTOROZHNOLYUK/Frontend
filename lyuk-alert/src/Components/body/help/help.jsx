import style from "./help.module.scss";

export default function Help() {
  return (
    <div className={style.help + " " + "container"}>
      <h2>Хочу помочь</h2>
      <div className={style.text}>
        <p>
        Хочешь внести больший вклад в решение проблемы открытых люков?
        </p>
        <p>
        Мы активно набираем волонтёров в нашу команду, а также ищем спонсоров проекта.
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
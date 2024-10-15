import style from "./stats.module.scss";

export default function Stats() {
  return (
    <div className={style.stats + " " + "container"}>
      <h2>Проект в цифрах</h2>
      <div className={style.nums}>
        <div className={style.num}>
          <span>453</span>
          <p>закрытых люка</p>
        </div>
        <div className={style.num}>
          <span>1490</span>
          <p>заявок об открытых люках</p>
        </div>
        <div className={style.num}>
          <span>39</span>
          <p>городов-участников проекта</p>
        </div>
      </div>
    </div>
  );
}

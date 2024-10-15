import style from "./mission.module.scss";

export default function Mission() {
  return (
    <div className={style.mission + " " + "container"}>
      <h2>Наша миссия</h2>
      <div className={style.missions}>
        <div className={style.mission1}>
          <h3>Безопасность через участие</h3>
          <p>
            Создавать безопасное городское пространство, вовлекая жителей в
            устранение проблем с инфраструктурой.
          </p>
        </div>
        <div className={style.mission2}>
          <h3>Совместная безопасность</h3>
          <p>
            Объединять граждан и службы для быстрого устранения опасных ситуаций
            в городе.
          </p>
        </div>
      </div>
    </div>
  );
}

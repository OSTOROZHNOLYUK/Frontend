import style from "./body.module.scss";
import MapBox from "./mapbox";

export default function Body() {
  return (
    <div className={style.map + " " + "container"}>
      <h2>Открытые люки в твоем городе</h2>
      <MapBox/>
    </div>
  );
}

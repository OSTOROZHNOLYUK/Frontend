import style from "./body.module.scss"
import { YMaps, Map, Placemark, SearchControl } from "react-yandex-maps";
export default function MapBox() {
  return (
    <YMaps>
      <Map 
        style={{width: "100%", height: "500px", margin:"25px 0 60px 0"}}
        defaultState={{
          center: [55.75, 37.57],
          zoom: 9,
          controls: ["zoomControl"],
        }}
        modules={["control.ZoomControl"]}
      >
        <SearchControl options={{ float: "left" }} />
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[55.75, 37.57]}
          properties={{
            balloonContentBody: "Открытый люк",
          }}
          options={{iconColor: "green"}}
        />
      </Map>
    </YMaps>
  );
}

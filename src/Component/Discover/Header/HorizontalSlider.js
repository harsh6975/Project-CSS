import React from "react";
import style from "./Header.module.css";
import { data as PersonList } from "./Data";
function HorizontalSlider() {
  return (
    <div className={style.horizontalslider}>
      <div className={style.slidercontaner}>
        {PersonList.map((data) => {
          return (
            <div className={style.item}>
              <img src={data.img} alt={data.alt}></img>
              <h4>{data.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalSlider;

import React from "react";
import style from "./Body.module.css";
import { data } from "./Data";
import MostWatched from "./MostWatched";
function Body() {
  return (
    <div className={style.body}>
      <div className={style.horizontalslider}>
        <div className={style.slidercontaner}>
          {data.map((data) => {
            return (
              <div className={style.item}>
                <img src={data.img} alt={data.alt}></img>
                <div>
                  <h2>
                    {data.content1}
                    <br />
                    {data.content2}
                    <br />
                    {data.content3}
                    <br />
                    {data.content4}
                  </h2>
                  <h5>{data.name}</h5>
                  <p>{data.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MostWatched />
    </div>
  );
}

export default Body;

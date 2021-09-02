import React from "react";
import { mostWatch } from "./Data";
import style from "./MostWatched.module.css";
function MostWatched() {
  return (
    <div className={style.mostWatch}>
      <h2>Most Watched</h2>
      {mostWatch.map((data) => {
        return (
          <div className={style.itembox}>
            <div>
              <img src={data.img} alt="" />
            </div>
            <div>
              <h3>{data.content}</h3>
              <p>{data.name} </p>
              <span>{data.view}</span>
              <span>{data.time} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MostWatched;

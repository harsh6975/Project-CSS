import React from "react";
import { mostWatch } from "./Data";
import style from "./MostWatched.module.css";
function MostWatched() {
  return (
    <div className={style.mostWatch}>
      <div className={style.item}>
        {mostWatch.map((data) => {
          return (
            <div className={style.itembox}>
              <div>
                <img src={data.img} alt="" />
              </div>
              <div>
                <h3>{data.content}</h3>
                <p>{data.name} </p>
                <div className={style.bottomtext}>
                  <div>{data.view}</div>
                  <div className={style.time}>{data.time} </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MostWatched;

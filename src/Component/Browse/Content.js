import React,{useState} from "react";
import style from "./Browse.module.css";
import img from "../../Images/image 15.png";
import heart from "../../Images/Heart.png";
import send from "../../Images/Send.png";
function Content() {
  const [like,setLike]=useState(false);
  const setLikeHnadler=()=>{
      setLike(!like);
  }

  return (
    <div className={style.container}>
      <img src={img} alt=""></img>
      <div className={style.content}>
        <p>Your first skateboard</p>
        <div className={style.logocontent}>
          <div className={!like ? style.heart:style.activeHeart} onClick={setLikeHnadler}>
            <img src={heart} alt=""></img>
          </div>
          <div className={style.send}>
            <img src={send} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

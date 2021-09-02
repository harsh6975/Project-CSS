import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import style from "./Browse.module.css";
import Content from "./Content";
import { Link } from "react-router-dom";

function Browse() {
  return (
    <div className={style.browse}>
      <div className={style.top}>
       <Link to="/discover" style={{textDecoration:"none" ,color:"white"}}> <ArrowBackIcon /></Link>
        <h1>Browse</h1>
      </div>
      <Content/>
      <Content/>
    </div>
  );
}

export default Browse;

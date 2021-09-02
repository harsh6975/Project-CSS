import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HorizontalSlider from "./HorizontalSlider";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.navbar}>
      <div className={style.header}>
        <h1 className={style.name}>Discover</h1>
        <SearchIcon className={style.search} />
      </div>
      <HorizontalSlider/>
    </div>
  );
}

export default Header;

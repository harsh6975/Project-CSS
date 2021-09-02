import React from "react";
import style from "./Footer.module.css";
import home from "../../Images/Home.png";
import browser from "../../Images/browser.png";
import more from "../../Images/more.png";
import bookmark from "../../Images/Bookmark.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className={style.footer}>
      <NavLink
        activeClassName={style.active}
        style={{ textDecoration: "none" }}
        to="/discover"
      >
        <div className={style.fotterContainer}>
          <img src={home} alt="home"></img>
          <p>Discover</p>
        </div>
      </NavLink>
      <NavLink
        activeClassName={style.active}
        style={{ textDecoration: "none" }}
        to="/browse"
      >
        <div className={style.fotterContainer}>
          <img src={browser} alt="browser"></img>
          <p>Browse</p>
        </div>
      </NavLink>
      <NavLink
        activeClassName={style.active}
        style={{ textDecoration: "none" }}
        to="/comingsoon"
      >
        <div className={style.fotterContainer}>
          <img src={bookmark} alt="bookmark"></img>
          <p>Bookmark</p>
        </div>
      </NavLink>
      <NavLink
        activeClassName={style.active}
        style={{ textDecoration: "none" }}
        to="/comingsoon"
      >
        {console.log(style.active)}
        <div className={style.fotterContainer}>
          <img src={more} alt="more"></img>
          <p>More</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Footer;

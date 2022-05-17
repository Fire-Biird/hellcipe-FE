import React from "react";
import classes from "./Footer.module.css";
import git from "../Component/github.svg";
import twitter from "../Component/twitter.svg";
import facebook from "../Component/facebook.svg";
import instagram from "../Component/instagram.svg";

const Footer = () => {
  return (
    <>
      <hr />
      <div className={classes.header}>
        <div className={classes.left}>
          <p className={classes.visit}> <img src={git} /> Visit our Github</p>
          <a href="https://github.com/Fire-Biird/hellcipe.git" className={classes.address}>
            https://github.com/Fire-Biird/hellcipe.git
          </a>
        </div>
        <div className={classes.right}>
          <img src={twitter} />
          <img src={facebook} />
          <img src={instagram} />
        </div>
      </div>
    </>
  );
};

export default Footer;

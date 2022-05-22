/* eslint-disable */

import React from "react";
import classes from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.topinfo}>
          <div className = {classes.welcomeinfo}>
            <p>불사조님 환영합니다</p>
            <p>okcomper@naver.com</p>
          </div>
          <div className = {classes.changepwd}></div>
        </div>
        <div className = {classes.underinfo}>
          <div className = {classes.bookmark}></div>
          <div className = {classes.recipe}></div>
          <div className = {classes.graph}></div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;

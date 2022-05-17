import React from "react";
import Hellicon from "../Component/hellicon.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className= {classes.header}>
        <div className={classes.left}>
          <img src={ Hellicon } />
          <h1 className={classes.title}>Hellcipe</h1>
        </div>
        <div className={classes.right}>
          {/* 나중에 함수로 로그인시 환영합니다 / 아닐시 어쩌기로 바꾸기 */}
          <div className={classes.welcome}>임혜진님 환영합니다</div>
          <button> logout</button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;

/* eslint-disable */

import React from "react";
import Hellicon from "../Component/hellicon.svg";
import classes from "./SignUp.module.css";
const SignUp = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>

        <p className={classes.hell}><img className={classes.icon} src={Hellicon} /> Hellcipe</p>
      </div>
      <div className={classes.holder}>
        <input className={classes.holder1} type="text" placeholder='  닉네임'/>
        <input className={classes.holder2} type="text" placeholder='  이메일'/>
        <input className={classes.holder3} type="text" placeholder='  비밀번호'/>
        <input className={classes.holder3} type="text" placeholder='  비밀번호 확인'/>
        <div className={classes.btn}>
        <button>회 원 가 입</button>
        <button>취 소</button>
      </div>

      </div>

    </div>
  );
};

export default SignUp;

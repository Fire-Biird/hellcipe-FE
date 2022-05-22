/* eslint-disable */

import React from 'react'
import classes from './Login.module.css'
import Hellicon from "../Component/hellicon.svg";


const Login = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>

        <p className={classes.hell}><img className={classes.icon} src={Hellicon} /> Hellcipe</p>
      </div>
      <div className={classes.holder}>
        <input className={classes.holder1} type="text" placeholder='  이메일'/>
        <input className={classes.holder2} type="text" placeholder='  비밀번호'/>
        <div className={classes.btn}>
        <button>회 원 가 입</button>
        <button>로 그 인</button>
      </div>

      </div>

    </div>
  )
}

export default Login
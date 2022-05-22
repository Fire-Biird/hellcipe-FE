/* eslint-disable */

import React from 'react'
import classes from './SearchPage.module.css'

const SearchPage = () => {
  return (
    <>
    <p className={classes.title}>재료를 입력하세요 (최대3개)</p>
    <div className={classes.holder}>
    <input className={classes.holder1} type="text" placeholder='  재료를 입력하세요'/>
    <input className={classes.holder2} type="text" placeholder='  재료를 입력하세요'/>
    <input className={classes.holder3} type="text" placeholder='  재료를 입력하세요'/>
    <button>등 록 하 기</button>

    </div>

    </>
  )
}
//616 58.79

export default SearchPage
/* eslint-disable */
import React from "react";
import Empty from "../Component/emptyphoto.svg";
import Sample from "../Component/sample.svg";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <div className={classes.main}>
        <img src={Empty} className={classes.empty} />
        <div className={classes.button}>
          <button>이미지 업로드</button>
          <button>검 색 하 기</button>
          <button>직접 입력하기</button>
        </div>
      </div>
      <div className={classes.mainunder}>
        <div className={classes.first}>
          <img src={Sample} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            laudantium temporibus culpa asperiores pariatur velit, dolore
            repellendus nam fugit nulla reiciendis, eveniet accusantium possimus
            optio placeat deserunt laboriosam iste. Tempora.
          </p>
        </div>

      </div>
    </>
  );
};

//740 541
//1763 453
//#F7F7F7

export default MainPage;

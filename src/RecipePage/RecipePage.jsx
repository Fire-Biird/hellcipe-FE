/* eslint-disable */

import React from "react";
import classes from "./RecipePage.module.css";
import Stake from "../Component/stake.svg";

const RecipePage = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <div className={classes.menu1}>
            <img src={Stake} />
            <div>
              <p className={classes.foodName}>스테이크</p>
              <p>200kcal/200g/100g/300g</p>
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <img src={Stake} />
          <p className={classes.foodName}>스테이크</p>
          <p>200kcal/200g/100g/300g</p>{" "}
        </div>
      </div>
    </>
  );
};
// 888 890  851 884

export default RecipePage;

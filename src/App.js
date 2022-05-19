/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Login from "./LogIn/Login";
import MainPage from "./MainPage/MainPage";
import RecipePage from "./RecipePage/RecipePage";
import SearchPage from "./SearchPage/SearchPage";
import SignUp from "./SignUp/SignUp";
import UserInfo from "./UserInfo/UserInfo";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>
      <SearchPage/>
    </>
  );
}

export default App;

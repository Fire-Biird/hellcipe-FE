/* eslint-disable */
import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
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
      <RecipePage/>
      <SignUp/>
      <Login/>
      <UserInfo/>
    </>
  );
}

export default App;

/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

      <BrowserRouter>
      <nav>
        <Link to="SearchPage"><button>버튼</button></Link>
 

      </nav>

        <Routes>
          <Route path="/" element = {<MainPage/>} />
          <Route path="SearchPage" element = {<SearchPage/>} />
          <Route path="RecipePage" element = {<RecipePage/>} />
          <Route path="SignUp" element = {<SignUp/>} />
          <Route path="Login" element = {<Login/>} />
          <Route path="UserInfo" element = {<UserInfo/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


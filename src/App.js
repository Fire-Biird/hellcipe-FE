import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Layout/Header";
import Login from "./LogIn/Login"
import MainPage from "./MainPage/MainPage"
import RecipePage from "./RecipePage/RecipePage"
import SearchPage from "./SearchPage/SearchPage"
import SignUp from "./SignUp/SignUp"
import UserInfo from "./UserInfo/UserInfo"
import Footer from "./Layout/Footer"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
     
      <Routes>
      <Route></Route>
        
      </Routes>
    </BrowserRouter>

      <div>
        <h1>Hi</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import React, {useState}  from 'react';
import {Routes,Route} from 'react-router-dom';
import MainPage from './page/main/main';
import DetailPage from './page/detail/detail';
import ProductRegister from './page/product_registe/product_register';
import RequireAuth from './component/authority/login_auth/requireAuth';
import LogoutAuth from './component/authority/logout_auth/logout_auth';
import Test from './page/test/test';
import Login from './page/login/login';
import Signup from './page/signup/signup';



function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/product/detail/:product_id" element={<DetailPage/>}/>
          <Route element={<RequireAuth/>}>
            <Route path="/product/register" element={<ProductRegister/>}/>
          </Route>
          <Route element={<LogoutAuth/>}>
            <Route path="/login" element={<Login/> } />
            <Route path="/signup" element={<Signup/>} />
          </Route>
          <Route path="/test"element={<Test/>}/>
       </Routes>
    </div>
  );
}

export default App;
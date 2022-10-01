import React from 'react';
//import './App.css';
import { Haircare } from './Components/haircare';
import { Moisturizers } from './Components/moisturizers';
import { ProductDescription } from './Components/productdesc';
import { Routes, Route } from "react-router-dom"
import { Auth } from './authComponents/auth';
import { AuthVerify } from './authComponents/authVerify';
import { AuthReg } from './authComponents/authReg';
import { AuthLog } from './authComponents/authLogin';
import {Home} from './Components/home/Home';
import { Homepage } from './Components/Homepage/Homepage';
import MultilineTextFields from './Components/AddressComponents/Address';
import {Payment} from './Components/Payment/Payment';
import { Footer } from './Components/footer/Footer';
// import  CartNavbar  from './components/Cart/navbar/CartNavbar';

export const Api_Url = "https://nykaa-web-app-backend.herokuapp.com"


function App() {
  return (
    <div className="App">
      {/* <CartNavbar/> */}
      {/* <Home /> */}
      <Home />
      <Routes>
        <Route path='/' element={< Homepage />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/auth/verify' element={<AuthVerify />}></Route>
        <Route path='/auth/register' element={ <AuthReg />  }></Route>
        <Route path='/auth/login' element={ <AuthLog /> }></Route>
        <Route path="/Moisturizers" element={<Moisturizers />} ></Route>
        <Route path="/productdesc/:productId" element={<ProductDescription />} ></Route>
        <Route path="/haircare" element={<Haircare />} ></Route>
        <Route path="/address" element = {<MultilineTextFields/>}></Route>
        <Route path="/payment" element={<Payment />} />
        </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App


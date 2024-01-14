import React from "react";
import './App.css';
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";



function App() {


  React.useEffect(()=>{
    webFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[])



  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/product/:id" element={<ProductDetails/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route path="/products/:keyword" element={<Products/>} />
          <Route exact path="search" element={<Search/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

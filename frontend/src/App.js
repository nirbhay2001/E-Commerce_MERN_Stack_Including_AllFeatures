import React from "react";
import './App.css';
import Header from "./component/layout/Header/Header"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import webFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";



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
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

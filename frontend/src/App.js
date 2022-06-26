import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import webFont from 'webfontloader';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js'
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js'
function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
  <Router>
    <Header />
    <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
    <Footer />
    </Router >);
}


export default App;

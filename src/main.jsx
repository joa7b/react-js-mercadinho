import React from 'react'
import ReactDOM from 'react-dom/client'
import AllProducts from './pages/getAllproducts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AllProducts />
    <Footer />
  </React.StrictMode>
)

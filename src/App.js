import React, { useEffect }from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CatsPage from './pages/CatsPage';
import AboutMe from './pages/AboutMe';
import Beginners from './pages/BeginnersPage';
import Home from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';


function App() {
  useEffect(() => {
    document.title = "What the Cats!";
  },[]);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cats' element={<CatsPage />} />
        <Route path='/beginners' element={<Beginners />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

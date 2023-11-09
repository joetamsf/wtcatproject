import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CatsPage from './pages/CatsPage';
import AboutMe from './pages/AboutMe';
import Beginners from './pages/BeginnersPage';
import Home from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { fetchLikes } from './features/cats/catsSlice';
import { useDispatch } from 'react-redux';

function App() {

  useEffect(() => {
    document.title = "What the Cats!";
  },[]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLikes());
  }, [dispatch]);


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

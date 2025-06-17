import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Header from './components/Header';



const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/coin:coinId" element={<Detail/>}/>

    </Routes>

    </BrowserRouter>
    </div>
  );
};

export default App;
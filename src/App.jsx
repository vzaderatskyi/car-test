import React from 'react';
import './global/styles/index.scss';
import HomePage from './pages/HomePage';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarPage from './pages/CarPage';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
					<Route path='/' element={<HomePage />} exact />
					<Route path='/car/:id' element={<CarPage />} exact />
					<Route path='*' element={<Navigate to='/' />} exact />
				</Routes>
    </HashRouter>
  );
};

export default App;
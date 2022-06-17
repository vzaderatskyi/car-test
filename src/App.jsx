import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarPage from './pages/CarPage';
import './global/styles/index.scss';

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

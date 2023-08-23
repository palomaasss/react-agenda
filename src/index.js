import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home/App.js';
import Inserir from './pages/inserir/index.js';
import Consultar from './pages/consultar/index.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/inserir' element={<Inserir/>}/>
        <Route path='/consultar' element={<Consultar/>}/>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);



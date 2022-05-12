import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/index.css'

import Header from './components/Header';
import Read from './screens/Read';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

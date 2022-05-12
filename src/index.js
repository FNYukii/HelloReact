import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/index.css'

import Read from './screens/Read';
import ReadRealtime from './screens/ReadRealtime';
import Create from './screens/Create';
import Update from './screens/Update';
import Delete from './screens/Delete';
import NotFound from './screens/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/read-realtime' element={<ReadRealtime/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

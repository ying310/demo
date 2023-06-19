import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Lay from 'layouts/Lay';

import Compose from './providers/Compose';
import Home from 'containers/Home';
import Person from 'containers/Person';
import Page404 from './containers/Page404';


import './App.scss';


function App() {
  return (
    <Router>
      <Compose components={[Lay]}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/person' element={<Person />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
      </Compose>
    </Router>
  );
}

export default App;

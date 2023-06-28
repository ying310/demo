import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lay from 'layouts/Lay';

import Compose from './providers/Compose';
import Home from 'containers/Home';
import Person from 'containers/Person';
import Contact from 'containers/Contact';
import Message from 'containers/Message';
import Page404 from './containers/Page404';


import './App.scss';
import "./i18n";

function App() {
  return (
    <Router>
      <Compose components={[Lay]}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/person' element={<Person />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/message' element={<Message />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
      </Compose>
    </Router>
  );
}

export default App;

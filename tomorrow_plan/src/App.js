import { useDispatch,useSelector } from 'react-redux';

import './App.css';
import Header from './components/header.js';
import Planner from './components/Planner.js'
import Notif from './components/Notif.js';
import {Routes, Route } from 'react-router-dom'
import React from 'react';
import Preview from './components/Preview';
import Footer from './components/Footer';


function App() {
  const notification = useSelector(state => state.notification.notif)
  const message = useSelector(state => state.notification.message)


  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<React.Fragment>
          {notification && <Notif message={message} />}
          <Planner />
        </React.Fragment>} />
        <Route path='/preview' element={<Preview/>} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;

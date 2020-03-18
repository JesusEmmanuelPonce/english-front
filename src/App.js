import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/layout'

function App() {
  return (
    <>
      <Router>
        <Routing/>
      </Router>
    </>
  );
}

export default App;

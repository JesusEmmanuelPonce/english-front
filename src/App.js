import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SiderDemo from './components/layout'

function App() {
  return (
    <>
      <Router>
        <SiderDemo/>
      </Router>
    </>
  );
}

export default App;

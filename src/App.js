import React from 'react'
import About from './components/About'
import Home from './components/Home.react'
import Navbar from './components/Navbar'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)
export default App

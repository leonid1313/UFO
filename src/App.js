import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header.jsx'
import Loader from './components/Loader/Loader.jsx'
import About from './components/About/About.jsx'

import './App.scss'

import Users from './components/Users/Users';


function App () {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, []);

  return (
    <>
      {loader 
        ? (
          <>
            <Router basename="/UFO">
              <Header />
              <Route path='/' exact component={Users} />
              <Route path="/about/:item" exact component={About}/>
            </Router>
          </>
          )
        :  <Loader/>
      }
    </>
  )
}

export default App;


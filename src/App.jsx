import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}



export default App
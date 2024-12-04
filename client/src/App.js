import React from 'react';
import './components/styles/App.css'
import HomePage from './components/pages/homePage';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Navbar from './components/pages/inc/Navbar';
import Community from './components/pages/inc/community';
import NotFound from './components/pages/NotFound';
import SignUp from './components/pages/Login/signUp';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowMore from './components/pages/MoreAnime/showMore';
import Stream from './components/pages/MoreAnime/Streaming/stream';
import Rap from './components/test';
import Dashboard from './components/test2';

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <div>
    //     <Routes>
    //       <Route exact path="/" element={<HomePage />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contacts />} />
    //       <Route path="/community" element={<Community />} />
    //       <Route path='/signup' element={<SignUp />} />
    //       <Route path="/showmore" element={<ShowMore />} />
    //       <Route path='/stream' element={<Stream />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </div>
    // </Router>
  <div>
    <Rap />
    <Dashboard />
  </div>
  );

}

export default App;

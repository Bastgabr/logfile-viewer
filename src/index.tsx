import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home/index.tsx';
import About from './page/About/index.tsx';
import GettingStarted from './page/GettingStarted/index.tsx';
import Error from './components/Error/index.tsx';
import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';
import GlobalStyle from './utils/styles/GloblStyle.tsx';

ReactDOM.render(
  <Router>
    <GlobalStyle></GlobalStyle>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<Home newUpload={true} />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/getting-started" element={<GettingStarted />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

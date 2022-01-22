import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {  Routes, Route } from "react-router-dom";
import Post from './Post';
function App() {
  return (
    <>
      <body class="w-full h-full min-h-screen bg-bg min-w-320">
        <Header />
        <Routes>
          <Route path="/"  element={<Main />} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
        <Footer />
      </body>
    </>
  );
}

export default App;

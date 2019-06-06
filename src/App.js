import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

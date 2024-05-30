import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <div className="App">
        <Header />
    </div>
    <div className="App">
        <Home />
    </div>
    <div className="App">
        <Main />
    </div>
    <div className="App">
        <Information />
    </div>
    <div className="App">
      <Footer/>
    </div>
  </div>
  );
}

export default App;

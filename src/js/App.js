import React from "react";
import Header from './components/Header.js';
import Main from './components/Main'
import Footer from './components/Footer.js';
import '../App.css';


function App() {
  return(
    <section className={'app'}>
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}
export default App;

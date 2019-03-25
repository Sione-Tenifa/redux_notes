import React, { Component } from 'react';
import StickyForm from './StickyForm'
import StickyList from './StickyList'
import NavBar from "./components/NavBar";



const App = () => (
  <div className='App'>
    <NavBar />
    <StickyForm/>
    <StickyList/>
    

  </div>

)

export default App;

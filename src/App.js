import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Main from './components/Main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Menu/>
          <Menu/>
      </div>
    )
  }
}



export default App;

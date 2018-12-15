import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Main from './components/Main/main';

<<<<<<< HEAD
const url = process.env.PUBLIC_URL + '/img/bg.jpg'; 

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 21px;
`

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`
=======
>>>>>>> fc033ced5bd65139657dbe4589158e697a9d02f6
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <HeaderWrapper>
        <Grid>
            <Header/>
        </Grid>
      </HeaderWrapper>
      <MenuWrapper>
        <Grid>
          <Menu/>
        </Grid>
      </MenuWrapper>
          
      <MainWrapper>
        <Grid>
          <Main/>
        </Grid>
      </MainWrapper>
          
=======
          <Header/>
          <Menu/>
          <Menu/>
>>>>>>> fc033ced5bd65139657dbe4589158e697a9d02f6
      </div>
    )
  }
}



export default App;

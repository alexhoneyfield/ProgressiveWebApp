import React from 'react';

import { get } from 'idb-keyval'

import './App.css';

import Header from './Components/Header';
import NavBar from './Components/NavBar';
import View from './Components/View';
import Transition from './Components/Transition'

import Home from './Pages/Home';
import Camera from './Pages/Camera';
import Login from './Pages/Login';
import Loading from './Pages/Loading'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      page: 0,
      heading: ''
    }

    this.navigate = this.navigate.bind(this)
    this.pageChange = this.pageChange.bind(this)
  }

  async componentDidMount() {
    if (await get('Username') !== undefined && await get('Password') !== undefined) {
      this.navigate(2)
    } else {
      this.navigate(1)
    }
  }

  navigate(i) {
    this.setState({ page: i })
  }

  pageChange(i) {
    this.setState({ heading: this.headings[i] })
  }

  pages = [
    <Loading text='Getting Login Details' />,
    <Login logIn={() => this.navigate(2)} />,
    <Home />,
    <Camera />
  ]

  headings = [
    'Loading',
    'Login Page',
    'Home Page',
    'Camera Page',
    'Error'
  ]

  render() {

    return (
      <View className='App'>
        <Header text={this.state.heading} />
        <Transition pages={this.pages} page={this.state.page} change={this.pageChange} name='Main' />
        <NavBar navigate={this.navigate} />
      </View>
    );
  }
}

export default App;
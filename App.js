import React from 'react';

import { get } from 'idb-keyval'

import './App.css';
import './Components/Styles.css'

import Header from './Components/Header';
import NavBar from './Components/NavBar';
import View from './Components/View';

import Home from './Pages/Home';
import Camera from './Pages/Camera';
import Login from './Pages/Login';
import Loading from './Pages/Loading'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      page: null,
      nextPage: null,
      transitioning: false
    }

    this.navigate = this.navigate.bind(this)
    this.transitionEnd = this.transitionEnd.bind(this)
  }

  async componentDidMount() {
    if (await get('Username') !== undefined && await get('Password') !== undefined) {
      this.navigate(1)
    } else {
      this.navigate(0)
    }
  }

  navigate(i) {
    if (i !== this.state.page) {
      this.setState({ nextPage: i, transitioning: true })
    }
  }

  transitionEnd(e) {
    if (e.target.className === 'Page FadeOut') {
      this.setState({ page: this.state.nextPage, transitioning: false })
    }
  }

  render() {

    let page
    let heading

    switch (this.state.page) {
      case 0:
        page = <Login logIn={() => this.navigate(1)} />
        heading = 'Login'
        break
      case 1:
        page = <Home />
        heading = 'Home Page'
        break
      case 2:
        page = <Camera />
        heading = 'Camera Page'
        break
      default:
        page = <Loading />
        heading = 'Loading'

    }

    return (
      <View className='App'>
        <Header text={heading} />
        <div className={'Page' + (this.state.transitioning ? ' FadeOut' : '')} onTransitionEnd={this.transitionEnd}>
          {page}
        </div>
        <NavBar navigate={this.navigate} />
      </View>
    );
  }
}

export default App;
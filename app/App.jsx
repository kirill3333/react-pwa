import React, { Component } from 'react'
import Root from './modules/Root'
import Navbar from './modules/Navbar'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      [
        <Navbar key='1' />,
        <Root key='2' />
      ]
    )
  }
}

export default App

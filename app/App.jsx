import React, { Component } from 'react'
import Root from './modules/Root/index'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
        </ul>
        <Root />
      </div>
    )
  }
}

export default App

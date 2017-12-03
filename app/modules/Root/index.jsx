import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Catalog from '../Catalog'
import Main from '../Main'

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/catalog" component={Catalog}/>
      </Switch>
    )
  }
}

export default Root
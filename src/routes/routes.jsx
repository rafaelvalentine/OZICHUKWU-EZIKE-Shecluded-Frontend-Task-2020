import React from 'react'
import { Switch, Route } from 'react-router-dom'

/**
 * pages
 */ 

 import Home from '../containers/home'
 import Cats from '../containers/cats'
 import LOTR from '../containers/lotr'
 import NotFound from '../tools/Error/404error'

const Router = () => (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cats' component={Cats} />
        <Route exact path='/lotr' component={LOTR} />
        <Route component={NotFound} />
      </Switch>
    </>
  )

export default Router
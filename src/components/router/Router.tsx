import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import routes from './routes'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => {
          const {Component, ...rest} = route
          return (
            <Route {...rest}>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default Router

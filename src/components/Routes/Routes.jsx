import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';

export default function Routes({ children }){
  return(
    <Router>
      <Switch>
        {children}
      </Switch>
    </Router>
  )
}
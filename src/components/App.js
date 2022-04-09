import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import { Redirect } from 'react-router-dom';
import NotFound from './NotFound'

export default function App() {
    // your code here ...
    return <React.Fragment>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Movies}/>
            <Route path="/movies/:id" component={MovieDetail} />
            <Route path="/not-found" component={NotFound}/>
            <Redirect to='/not-found'  />
        </Switch>
        </BrowserRouter>
    </React.Fragment>;
}

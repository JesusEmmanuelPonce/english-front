import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import Get from '../components/get';

const Routes = () => {
    return(
        <Router>
            <Route exact path="/get" component={Get} />
            {/* <Route exact path="/verbs" component={Verbs}/>
            <Route exact path="/numbers" component={Numbers}/> */}
        </Router>
    )
}

export default Routes;
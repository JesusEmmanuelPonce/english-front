import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import Get from '../components/get';
import PresentSimple from '../components/Structures/PresentSimple';
import PastSimple from '../components/Structures/PastSimple';

const Routes = () => {
    return(
        <Router>
            <Route exact path="/get" component={Get} />
            <Route exact path="/present-simple" component={PresentSimple}/>
            <Route exact path="/past-simple" component={PastSimple}/>
        </Router>
    )
}

export default Routes;
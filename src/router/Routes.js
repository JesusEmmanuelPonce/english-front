import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import MenuPhrasalVerbs from '../components/PhrasalVerbs/MenuPhrasalVerbs';
import MenuVerbs from '../components/Verbs/MenuVerbs';
import MenuStructures from '../components/Structures/MenuStructures';
import Get from '../components/PhrasalVerbs/Get';
import PresentSimple from '../components/Structures/PresentSimple';
import PastSimple from '../components/Structures/PastSimple';
import RegularVerbs from '../components/Verbs/regularVerbs';
import IrregularVerbs from '../components/Verbs/irregularVerbs';

const Routes = () => {
    return(
        <Router>
            <Route exact path="/menu-phrasal-verbs" component={MenuPhrasalVerbs}/>
            <Route exact path="/menu-verbs" component={MenuVerbs}/>
            <Route exact path="/menu-estructuras" component={MenuStructures}/>
            <Route exact path="/get" component={Get} />
            <Route exact path="/present-simple" component={PresentSimple}/>
            <Route exact path="/past-simple" component={PastSimple}/>
            <Route exact path="/regular-verbs" component={RegularVerbs}/>
            <Route exact path="/irregular-verbs" component={IrregularVerbs}/>
        </Router>
    )
}

export default Routes;
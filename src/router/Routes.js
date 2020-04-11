import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import Main from '../components/main';
import MenuPhrasalVerbs from '../components/PhrasalVerbs/MenuPhrasalVerbs';
import MenuVerbs from '../components/Verbs/MenuVerbs';
import MenuGrammar from '../components/Grammar/MenuGrammar';
import Menu_Vocabulary from '../components/Vocabulary/MenuVocabulary';
import Get from '../components/PhrasalVerbs/get/Get';
import Put from '../components/PhrasalVerbs/put/Put';
import PresentSimple from '../components/Grammar/PresentSimple';
import PastSimple from '../components/Grammar/PastSimple';
import RegularVerbs from '../components/Verbs/regularVerbs';
import IrregularVerbs from '../components/Verbs/irregularVerbs';
import Family from '../components/Vocabulary/Family/family';
import Nationalities from '../components/Vocabulary/Nationatities/nationalities';

const Routes = () => {
    return(
        <Router>
            <Route exact path="/" component={Main}/>
            <Route exact path="/menu-phrasal-verbs" component={MenuPhrasalVerbs}/>
            <Route exact path="/menu-verbs" component={MenuVerbs}/>
            <Route exact path="/menu-grammar" component={MenuGrammar}/>
            <Route exact path="/menu-vocabulary" component={Menu_Vocabulary}/>
            <Route exact path="/get" component={Get} />
            <Route exact path="/put" component={Put} />
            <Route exact path="/present-simple" component={PresentSimple}/>
            <Route exact path="/past-simple" component={PastSimple}/>
            <Route exact path="/regular-verbs" component={RegularVerbs}/>
            <Route exact path="/irregular-verbs" component={IrregularVerbs}/>
            <Route exact path="/family" component={Family}/>
            <Route exact path="/nationalities" component={Nationalities}/>
        </Router>
    )
}

export default Routes;
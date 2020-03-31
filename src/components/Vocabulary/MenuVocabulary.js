import React from 'react';
import '../PhrasalVerbs/phrasalVerbs.css';
import { Link } from 'react-router-dom';
import MENU_VOCABULARY from '../../constant/MENU_VOCABULARY';

const MenuVocabulary = () => {
    return(
        <div className="container-menu-phrasal-pb">
            {
                MENU_VOCABULARY.map(item => (     
                    <Link to={item.route} key={item.name}>
                        <div className="square-menu-pb">
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default MenuVocabulary;
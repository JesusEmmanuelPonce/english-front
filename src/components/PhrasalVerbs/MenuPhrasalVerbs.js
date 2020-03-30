import React from 'react';
import { Link } from 'react-router-dom';
import MENU_PHRASAL_VERBS from '../../constant/MENU_PHRASAL_VERBS';

const MenuPhrasalVerbs = () => {
    return(
            <div className="container-menu-phrasal-pb">
             {
                MENU_PHRASAL_VERBS.map(item => (     
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

export default MenuPhrasalVerbs;
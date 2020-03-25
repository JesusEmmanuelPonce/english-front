import React from 'react';
import { Link } from 'react-router-dom';
import './verbs.css';
import MENU_VERBS from '../../constant/MENU_VERBS';

const MenuVerbs = () => {
    return(
        <div className="container-verbs-pb">
           {
               MENU_VERBS.map(item => (
                    <div className="square-verbs-pb" key={item.name}>
                        <Link to={item.route}>
                            <div className="content-verbs-pb">
                                <span className="letter-verbs">{item.name}</span>
                            </div>
                        </Link>
                    </div>
               ))
           }
        </div> 
    )
}

export default MenuVerbs;
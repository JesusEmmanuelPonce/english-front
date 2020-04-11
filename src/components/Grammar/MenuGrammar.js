import React from 'react';
import MENU_GRAMMAR from '../../constant/MENU_GRAMMAR';
import { Link } from 'react-router-dom';

const MenuGrammar = () =>{
    return(
            <div className="container-menu-phrasal-pb">
                {
                    MENU_GRAMMAR.map(item => (     
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

export default MenuGrammar;
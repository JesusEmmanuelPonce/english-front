import React from 'react';
import { Link } from 'react-router-dom';
import './verbs.css';

const MenuVerbs = () => {
    return(
        <div className="container-verbs-pb">
            <div>
                <Link to="/regular-verbs">
                    <div className="container-regular-pb">
                        Verbos regulares
                        </div>
                </Link>
            </div>
            <div>
                <Link to="/irregular-verbs">
                    <div className="container-irregular-pb">
                        Verbos irregulares
                    </div>
                </Link>
            </div>
        </div> 
    )
}

export default MenuVerbs;
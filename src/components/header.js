import React from 'react';
import './header.css';

const Header = ({title}) => (
    <div className="header-container-pb">
       <span>{title}</span>
    </div>
)

export default Header;
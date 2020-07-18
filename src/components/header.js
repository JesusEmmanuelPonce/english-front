import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.css';
import { LeftOutlined } from '@ant-design/icons';

const Header = ({title}) => {

    const history = useHistory()

    return(
        <div className="header-container-pb">
            <button className="btn-header-pb" onClick={()=> history.goBack()}><LeftOutlined className="arrow-header-pb"/></button>
            <span>{title}</span>
            <span>HOla</span>
        </div>
    )
}

export default Header;
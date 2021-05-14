import { React } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {

    return (
        <div className="Header">
            <h1><Link to={`/`} >Home</Link></h1>
        </div>
    )
}
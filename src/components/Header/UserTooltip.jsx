import React from 'react';
import style from './Header.module.css';
import user from '../../assets/image/user.jpg';
import {NavLink} from "react-router-dom";

const UserTooltip = ({logout, userName}) => {
    const onLogout = () => {
        logout();
    };

    return (
        <div className={`${style.userTooltip} ${style.tooltip}`}>
            <div className={style.userHeader}>
                <img src={user} alt="user"/>
                <div>{userName}</div>
            </div>
            <ul className={style.userNav}>
                <li><NavLink to='/profile'>My profile</NavLink></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">My saved item</a></li>
            </ul>
            <div>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
};

export default UserTooltip;
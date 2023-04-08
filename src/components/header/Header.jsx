import React from 'react';
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";
import logo from '../../assets/logo.png';
import './header.css';

function Header() {
    return (
        <div className='header__container'>
            <div className='logo'>
                <img src={logo} alt="site logo" />
            </div>
            <div className="search">
                <input
                    type='text'
                    placeholder='Search famous baby'
                    className='search__input'
                />
                <BsSearch className='search__icon' />
            </div>
            <div className="header__buttons">
                <button className='upload'>Upload</button>
                <button className='login'>Log in</button>
                <BsThreeDotsVertical className='header__dots' />
            </div>
        </div>
    )
}

export default Header;
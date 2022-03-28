import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Header_Menu = ({ admin, adminReg }) => {
    return (
        <>
            {adminReg === false ? <div className='header'>
                <div className='heder-logo'>
                    <img
                        className='header-logo'
                        src="https://yt3.ggpht.com/a/AATXAJzj6YzY8DsguQggorf0VqXPd_pqMkJkX6MmpKTk=s900-c-k-c0x00ffffff-no-rj"
                        alt="" />
                </div>
                <button onClick={admin} className='btn text-light button admin-btn'>Для админ</button>
            </div> :
                <div className='header'>
                <div className='heder-logo'>
                    <img
                        className='header-logo'
                        src="https://yt3.ggpht.com/a/AATXAJzj6YzY8DsguQggorf0VqXPd_pqMkJkX6MmpKTk=s900-c-k-c0x00ffffff-no-rj"
                        alt="" />
                </div>
                <button onClick={admin} className='btn text-light button admin-btn'>Выход</button>
            </div>

            }
        </>
    );
};

export default Header_Menu;
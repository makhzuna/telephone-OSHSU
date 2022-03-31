import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const HeaderMenu = ({ admin, adminReg, logout }) => {

    return (
        <>
            <div className='header'>
                <div className='logo-box container'>
                    <img
                        className='header-logo'
                        src="https://www.oshsu.kg/main/images/logo/logo_w_ru.svg"
                        alt="" />
                    <div className='w-100'>
                        <div className="hr"></div>
                        <p className='header-title text-center'>Телефонный справочник ОшГУ</p>
                        <div className="hr"></div>
                    </div>
                </div>
                {adminReg === false ?
                    <button onClick={admin} className='btn text-light button admin-btn'>Для админ</button> :
                    <button onClick={logout} className='btn text-light button admin-btn'>Выход</button>
                }
            </div>
        </>
    );
};

export default HeaderMenu;
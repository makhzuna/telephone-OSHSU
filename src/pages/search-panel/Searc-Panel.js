import React from 'react';
import { Toastify } from 'react-toastify';
import { Button } from 'react-bootstrap';

const Searc_Panel = () => {
    return (
        <>
            <div className="search-menu">
                <div className=''>
                    <span className='search-span'>Преподаватель</span>
                    <span className='search-span'>Студент</span>
                    <span className='search-span'>Родители</span>
                </div>
            </div>
            <div className='search-panel'>
                <h2 className='text-light'>Поисковый панел</h2>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Имя Фамилия' />
                <input
                    type="text"
                    className='form-control'
                    placeholder='Телефон' />
                <input
                    type="text"
                    className='form-control'
                    placeholder='Адресс' />
                <div className='search-btn'>
                    <button className='btn text-light button'>Искать</button>
                    <button  className='btn text-light button'>Сбросить</button>
                </div>
            </div>
        </>
    );
};
export default Searc_Panel;
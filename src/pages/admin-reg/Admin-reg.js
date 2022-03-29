import React from 'react';
// import PropTypes from 'prop-types';
import Toastify from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Button } from 'bootstrap';

const Admin_reg = (props) => {
    console.log(props)

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        // mode: 'onFocus'
    });

    return (
        <div className='search-panel'>
            <h2 className='text-light'>Регистрация</h2>
            <input
                {
                ...register('name', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Имя' />
            {errors?.name && <span>
                {errors.name.message = 'поле обьзятельно к заполнению'}
            </span>}

            <input
                {
                ...register('lastName', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Фамилия' />
            {errors?.lastName && <span>
                {errors.lastName.message = 'поле обьзятельно к заполнению'}
            </span>}

            <input
                {
                ...register('studContact', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Тел.' />
            {errors?.studContact && <span>
                {errors.studContact.message = 'поле обьзятельно к заполнению'}
            </span>}
            <input
                {
                ...register('adress', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Адресс' />
            {errors?.adress && <span>
                {errors.adress.message = 'поле обьзятельно к заполнению'}
            </span>}
            <input
                {
                ...register('parent', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Родители' />
            {errors?.parent && <span>
                {errors.parent.message = 'поле обьзятельно к заполнению'}
            </span>}
            <input
                {
                ...register('parentaContact', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Тел. (Родители)' />
            {errors?.parentaContact && <span>
                {errors.parentaContact.message = 'поле обьзятельно к заполнению'}
            </span>}
            <div className='search-btn'>
                <button className='btn text-light button'>Добавить</button>
                <button  className='btn text-light button'>Сбросить</button>
            </div>
        </div>
    );
};



export default Admin_reg;
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
    // const resetValue =()=>{
    //     reset()
    // }
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
            {errors?.name && <span>
                {errors.name.message = 'поле обьзятельно к заполнению'}
            </span>}

            <input
                {
                ...register('studNum', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Тел.' />
            {errors?.name && <span>
                {errors.name.message = 'поле обьзятельно к заполнению'}
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
            {errors?.name && <span>
                {errors.name.message = 'поле обьзятельно к заполнению'}
            </span>}
            <input
                {
                ...register('studParNum', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Минимум 8 символ"
                    }
                })}
                type='text'
                className="form-control"
                placeholder='Тел. (Родители)' />
            {errors?.name && <span>
                {errors.name.message = 'поле обьзятельно к заполнению'}
            </span>}
            <div className='search-btn'>
                <button className='btn text-light button'>Добавить</button>
                <button  className='btn text-light button'>Сбросить</button>
            </div>
        </div>
    );
};



export default Admin_reg;
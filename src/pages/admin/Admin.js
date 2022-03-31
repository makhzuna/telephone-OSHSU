import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Admin_reg from '../admin-reg/Admin-reg';

const Admin = ({ auth, exitAdmin, handleSub, loading }) => {

    const loader = <Spinner size='sm' animation="border" variant="light" />
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        // mode: 'onFocus'
    });

    const onSubmit = (state) => {
        handleSub(state)
        reset()
    }


    return (
        <div className={auth ? 'admin-container' : 'd-none'}>
            <div className='admin-sign'>
                <form onSubmit={handleSubmit(onSubmit)} className='form-reg forma'>
                    <div className="search-panel sign-admin-panel">
                        <h3 className='text-light'>Для админы</h3>
                        <div className='auth-admin'>
                            <input
                                {
                                ...register('login', {
                                    required: "поле обьзятельно к заполнению",
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 8 символ"
                                    }
                                })}
                                type='text'
                                className="form-control"
                                placeholder="login" />
                            {errors?.login && <span>
                                {errors.login.message}
                            </span>}
                        </div>
                        <div className="auth-admin">
                            <input
                                {
                                ...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message: "Минимум 8 символ"
                                    }
                                })}
                                type='password'
                                className="form-control"
                                placeholder="password" />
                            {errors?.password && <span>
                                {errors.password.message = 'поле обьзятельно к заполнению'}
                            </span>}
                        </div>
                        <button
                            type='submit'
                            className="btn btn-primary">

                            {loading ? loader : 'sign in'}
                        </button>
                    </div>
                </form>
            </div>

            <span
                className="exit-sign"
                onClick={exitAdmin}
            >X</span>
        </div>
    );
};

export default Admin;
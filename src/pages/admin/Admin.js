import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Admin_reg from '../admin-reg/Admin-reg';

const Admin = ({ auth, exitAdmin, handleSub}) => {
    const [loading, setLoding] = useState(false)

    const loader = <Spinner size='sm' animation="border" variant="light" />
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        // mode: 'onFocus'
    });
    


    return (
        <div className={auth ? 'admin-container' : 'd-none'}>
            <div className='admin-sign'>
                <form onSubmit={handleSubmit(handleSub)} className='form-reg forma'>
                    <div className="search-panel">
                        <h2 className='text-light'>Для админы</h2>
                        <input
                            {
                            ...register('login', {
                                required: true,
                                minLength: {
                                    value: 5,
                                    message: "Минимум 8 символ"
                                }
                            })}
                            type='text'
                            className="form-control"
                            placeholder="login" />
                        {errors?.name && <span>
                            {errors.name.message = 'поле обьзятельно к заполнению'}
                        </span>}
                        <input
                            {
                            ...register('password', {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: "Минимум 8 символ"
                                }
                            })}
                            type='password'
                            className="form-control"
                            placeholder="password" />
                        {errors?.name && <span>
                            {errors.name.message = 'поле обьзятельно к заполнению'}
                        </span>}

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
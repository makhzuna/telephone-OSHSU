import { React, useEffect, useState } from 'react';
import { Toastify } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Searc_Panel = ({ onSub, h1 }) => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        // mode: 'onFocus'
    });
    const onSubmit = (data) => {
        onSub(data)
        reset()
    }
    const rese = (data) => {
        reset()
    }

    console.log(h1)
    return (
        <>
            <div className="search-menu">
                <div className=''>
                    <span className='search-span'>Преподаватель</span>
                    <span className='search-span'>Студент</span>
                    <span className='search-span'>Родители</span>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='search-panel'>
                    <h2 className='text-light'>Искать</h2>
                    <input
                        {
                        ...register('name', {
                            required: false,
                            // minLength: {
                            //     value: 0,
                            //     message: "Минимум 8 символ"
                            // }
                        })}
                        type='text'
                        className="form-control"
                        placeholder='Имя' />
                    {/* {errors?.name && <span>
                        {errors.name.message = 'поле обьзятельно к заполнению'}
                    </span>} */}

                    <input
                        {
                        ...register('lastName', {
                            required: false,
                            minLength: {
                                value: 0,
                                message: "Минимум 8 символ"
                            }
                        })}
                        type='text'
                        className="form-control"
                        placeholder='Фамилия' />
                    {/* {errors?.lastName && <span>
                        {errors.lastName.message = 'поле обьзятельно к заполнению'}
                    </span>} */}

                    <input
                        {
                        ...register('studContact', {
                            required: false,
                            minLength: {
                                value: 0,
                                message: "Минимум 8 символ"
                            }
                        })}
                        type='text'
                        className="form-control"
                        placeholder='Тел.' />
                    {/* {errors?.studContact && <span>
                        {errors.studContact.message = 'поле обьзятельно к заполнению'}
                    </span>} */}
                    <div className='search-btn'>
                        <button type='submit' className='btn text-light button'>Искать</button>
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                            onClick={rese}
                            className='btn text-light button'
                        >Сбросить</span>
                    </div>
                </div>
            </form>
            <div className='container'>
                {h1.map((e, i) => {
                    return (
                        <>
                            <h5>{e.aty}</h5>
                            <h5>{e.jonu}</h5>
                            <h5>{e.telephone}</h5>
                            <h5>{e.parents}</h5></>
                    )
                })}
            </div>
        </>
    );
};
export default Searc_Panel;
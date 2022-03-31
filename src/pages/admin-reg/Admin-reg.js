import React from 'react';
// import PropTypes from 'prop-types';
import Toastify from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Button } from 'bootstrap';

const Admin_reg = ({ onSub, h1, fac, data }) => {

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

    return (
        <div className=" container">
            <div className='container'>
                <div className='hr'></div>
            </div>
            <div className="container fac-container">
                <label htmlFor="">Выберите факультеть</label>
                <select name="" id="" className='faculity'>
                    <option value="teacher">Преподователь</option>
                    <option value="student">Студент</option>
                </select>
                <label htmlFor="">Выберите факультеть</label>
                <select name="" id="" className='faculity'>
                    <option value=''></option>
                    {fac.map((elem, index) => {
                        return (<>
                            <option value={elem.type}>{elem.fac}</option>
                        </>)
                    })}
                </select>
                <div className='hr'></div>
            </div>
            <div className=' container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className='container'>
                        {data.map((elem, index) => {
                            console.log(elem.search)
                            return (<div className='registe container'>
                                <div className='search-panel w-50 container'>
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
                                        placeholder='Имя'
                                    />
                                    {errors?.name && <span>
                                        {errors.name.message = 'поле обьзятельно к заполнению'}
                                    </span>}


                                </div>
                                <div className='btn'></div>
                            </div>)
                        })}
                    </ul>
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
                </form>
                <div className='hr'></div>
            </div>



        </div>
    );
};



export default Admin_reg;
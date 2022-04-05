import React from 'react';
// import PropTypes from 'prop-types';
import Toastify from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
const Admin_reg = ({ onSub, h1, fac, data, cafedra }) => {

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
    
    console.log(cafedra)


    return (
        <div className=" container">
            <div className='container'>
                <div className='hr'></div>
            </div>

            <div className=' container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className='container'>
                        <div className='registe container'>
                            <div className="container fac-container">
                                <label htmlFor="">Выберите факультеть</label>
                                <select name="" id=""
                                    {
                                    ...register('cafedra', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    className='faculity'>
                                    {cafedra.map((elem, index) => {
                                        
                                        return (<>
                                            {elem.cafedra.map((e,inx)=>{
                                                return (<>
                                                <option value={e}>{e}</option>
                                                </>)
                                                })}
                                        </>)
                                    })}
                                </select>
                                {errors?.faculity && <span>
                                    {errors.faculity.message = 'поле обьзятельно к заполнению'}
                                </span>}
                                <label htmlFor="">Выберите факультеть</label>
                                <select name="" id=""
                                    {
                                    ...register('faculity', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    className='faculity'>
                                    {fac.map((elem, index) => {
                                        return (<>
                                            <option value={elem.type}>{elem.fac}</option>
                                        </>)
                                    })}
                                </select>
                                {errors?.faculity && <span>
                                    {errors.faculity.message = 'поле обьзятельно к заполнению'}
                                </span>}
                                <div className='hr'></div>
                            </div>
                            
                            {/* <div className='search-panel w-50 container'>
                                <input
                                    {
                                    ...register('cafedra', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.cafedra && <span>
                                    {errors.cafedra.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div> */}
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('rank', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.rank && <span>
                                    {errors.rank.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('lastname', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.lastname && <span>
                                    {errors.lastname.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('name', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.name && <span>
                                    {errors.name.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('surname', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.surname && <span>
                                    {errors.surname.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('phone', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.phone && <span>
                                    {errors.phone.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('mobile', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.mobile && <span>
                                    {errors.mobile.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>
                            <div className='search-panel container'>
                                <input
                                    {
                                    ...register('sotcial', {
                                        required: false,
                                        minLength: {
                                            value: 0,
                                            message: "Минимум 8 символ"
                                        }
                                    })}
                                    type='text'
                                    className="form-control"
                                    placeholder='Имя'
                                />
                                {errors?.sotcial && <span>
                                    {errors.sotcial.message = 'поле обьзятельно к заполнению'}
                                </span>}
                            </div>

                        </div>)
                        {/* })} */}
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
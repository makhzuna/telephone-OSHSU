import { React, useEffect, useState } from 'react';
import { Toastify } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Searc_Panel = ({ onSub, h1, fac, data }) => {

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
            <div className="search-container ">
                <div className='container'>
                    <h2>Советы по использованию</h2>
                    <div>
                        <ul>
                            <li><p>Для осуществления поиска необходимо:</p> <ol>
                                <li>выбрать населенный пункт из списка,</li>
                                <li>выбрать необходимый тип поиска,</li>
                                <li>заполнить поля поиска согласно выводимой подсказке.</li>
                            </ol></li>
                            <li><p>Если вы все равно не можете найти информацию по требуемому абоненту, значит такого абонента не существует.</p></li>
                        </ul>
                    </div>
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
                        {fac.map((elem, index) => {
                            return (
                                <>
                                    <option value={elem.type}>{elem.fac}</option>
                                </>
                            )
                        })}
                    </select>

                    <div className='hr'></div>
                </div>
                <div className='search-menu container'>
                    <ul>
                        {data.map((elem, index) => {
                            console.log(elem.search)
                            return (
                                <>
                                    <li className='faculity btn'>{elem.search}</li>
                                </>
                            )
                        })}
                    </ul>
                    <div className='hr'></div>
                </div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='search-panel container'>
                    <h2 className='text-light '>Тип поиска:</h2>
                    <div className='search-box'>
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
                            className="form-control "
                            placeholder='Имя' />
                        {/* {errors?.name && <span>
                        {errors.name.message = 'поле обьзятельно к заполнению'}
                    </span>} */}
                    </div>
                    <p></p>
                    <div className='container'>
                        <div className='hr'></div>

                        <div className='text-light'>
                            <h2>Советы по использованию</h2>
                            <ul>
                                <li><p>Для осуществления поиска необходимо:</p> <ol>
                                    <li>выбрать населенный пункт из списка,</li>
                                    <li>выбрать необходимый тип поиска,</li>
                                    <li>заполнить поля поиска согласно выводимой подсказке.</li>
                                </ol></li>
                                <li><p>Если вы все равно не можете найти информацию по требуемому абоненту, значит такого абонента не существует.</p></li>
                            </ul>
                        </div>
                        <div className='hr'></div>
                    </div>
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
import { React, useEffect, useState } from 'react';
import { Toastify } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Searc_Panel = ({ onSub, h1, fac, data, changeFaculity, searchType, type, resultSearch }) => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        // mode: 'onFocus'
    });
    const onSubmit = (data) => {
        onSub(data)
        reset()
    }
    const rese = () => {
        reset()
    }

    // console.log(h1)
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
                    <select name="" id=""
                        onChange={changeFaculity}
                        className='faculity'>
                        {fac.map((elem, index) => {
                            return (
                                <option key={index} id={elem.id} value={elem.type}>{elem.fac}</option>
                            )
                        })}
                    </select>

                    <div className='hr'></div>
                </div>
                <div className='search-menu container'>
                    <ul>
                        {data.map((elem, index) => {
                            // console.log(elem.search)
                            return (
                                <li
                                    key={index}
                                    onClick={() => searchType(elem.type)}
                                    className='faculity btn'>
                                    {elem.search}
                                </li>
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
                        {console.log('state ', type)}
                        <input
                            {
                            ...register(type, {
                                required: false,
                                minLength: {
                                    value: 0,
                                    message: "Минимум 8 символ"
                                }
                            })}
                            type='text'
                            className="form-control "
                            placeholder={type} />
                        {errors?.type && <span>
                            {errors.type.message = 'поле обьзятельно к заполнению'}
                        </span>}
                    </div>
                    <p></p>
                    <div className='container'>
                        <div className='hr'></div>

                        <div className='text-light'>
                            <h2>Советы по использованию:</h2>
                            <ul>
                                {type === 'lastname' ?
                                    <li>Фамилию абонента необходимо вводить полностью, без ошибок (инициалы можно опустить).</li>
                                    :
                                    type === 'name' ? <li>Имя абонента необходимо вводить полностью, без ошибок (инициалы можно опустить).</li>
                                        :
                                        <li>Напишите хотя бы одно слово</li>}

                                {/* <li><p>Для осуществления поиска необходимо:</p>
                                    <ol>
                                        <li>выбрать населенный пункт из списка,</li>
                                        <li>выбрать необходимый тип поиска,</li>
                                        <li>заполнить поля поиска согласно выводимой подсказке.</li>
                                    </ol>
                                </li>
                                <li><p>Если вы все равно не можете найти информацию по требуемому абоненту, значит такого абонента не существует.</p></li> */}
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

                    {resultSearch.map((elem, index) => {
                        return (<>
                            <div className='search-result text-light'>
                                <h4>Результат</h4>
                                <ul>
                                    {/* <li>{fac.map((e, inx)=>{
                                    const rnk = e.id===elem.id-fac
                                    return(<>
                                    <li>{rnk}</li>
                                    </>)
                                })}</li> */}
                                    {elem.rank!=''?<li>{elem.rank}</li>:''}
                                    {elem.lastname!=''?<li>{elem.lastname}</li>:''}
                                    {elem.name!=''?<li>{elem.name}</li>:''}
                                    {elem.surname!=''?<li>{elem.surname}</li>:''}
                                    {elem.phone!=''?<li>{elem.phone}</li>:''}
                                    {elem.mobile!=''?<li>{elem.mobile}</li>:''}
                                    {elem.sotcial!=''?<li>{elem.sotcial}</li>:''}
                                </ul>
                            </div>
                        </>)
                    })}
                    <div className="hr"></div>
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
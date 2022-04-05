import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header_Menu from '../../components/header/header-menu';
import Searc_Panel from '../../components/search-panel/search-panel';
import Footer from '../../components/footer/Footer';
import Admin from '../admin/Admin';
import Admin_reg from '../admin-reg/Admin-reg';
import { ToastContainer, toast } from 'react-toastify';
import fac from '../../server/faculity/faculity';
import data from '../../server/data/data';
import cafedra from '../../server/cafedra/cafedra.json';
import dataMit from '../../server/data-mit/data-mit.json'

import { useForm } from 'react-hook-form';
const Main = (props) => {
    const [auth, setAuth] = useState(false)
    const [adminReg, setAdminReg] = useState(false);
    const [loading, setLoading] = useState(false)
    const [h1, setH1] = useState([])
    const [sType, setType] = useState('name')
    // const [posle, setPosle] = useState([])
    const [resultSearch, setResult] = useState([])


    const changeFaculity = (e) => {
        // console.log(e.target.value)
        const newFac = fac.filter(elem => elem.fac === e.target.value)
        console.log(newFac[0].id)
    }
    const searchType = (type) => {
        setType(type)
    }




    const signAdmin = () => {
        setAuth(!auth)
    }

    const exitAdmin = () => {
        setAuth(!auth)
    }

    const handleSub = (state) => {
        setLoading(true)
        if (state.login === 'users' && state.password === '12345678') {
            setTimeout(() => {
                setAdminReg(!adminReg)
                setAuth(!auth)
                console.log(adminReg)
                setLoading(false)
                toast.success('welcome')
            }, 3000)
        } else {
            setAdminReg(adminReg)
            // console.log(adminReg)
            toast.warning('error')
        }
    }

    const logout = () => {
        setAdminReg(!adminReg)
    }

    const onSub = (data) => {
        console.log("search ", data)
        console.log("data info ", dataMit.dataMit)
        const result = dataMit.dataMit.filter(e => {
            if (data.name) {
                if (data.name === e.name) {
                    return e.name.toLowerCase().indexOf(data.name.toLowerCase()) > -1
                }
            } else if (data.lastname) {
                return e.lastname.toLowerCase().indexOf(data.lastname.toLowerCase()) > -1
            } else if (data.rank) {
                return e.rank.toLowerCase().indexOf(data.rank.toLowerCase()) > -1
            }
        })
        setResult([...result])
    }
    console.log("output ", resultSearch)

    return (
        <>

            {adminReg === true ?
                <div className='bg-light'>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} logout={logout} />
                    <div className=''>
                        <div className='w-100 admin-search'>
                            <Admin_reg
                                onSub={onSub}
                                h1={h1}
                                fac={fac}
                                data={data}
                                cafedra={cafedra.cafedra} />
                        </div>

                        <Footer />
                    </div>
                </div>
                :
                <div className='block'>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} />
                    <Searc_Panel
                        onSub={onSub}
                        h1={h1}
                        fac={fac}
                        data={data}
                        changeFaculity={changeFaculity}
                        searchType={searchType}
                        type={sType} 
                        resultSearch={resultSearch}/>
                    <Admin loading={loading} auth={auth} exitAdmin={exitAdmin} handleSub={handleSub} />
                    <Footer />
                </div>
            }
            <ToastContainer position='bottom-center' />
        </>
    );
};

export default Main;
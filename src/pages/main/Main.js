import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header_Menu from '../../components/header-menu/header-menu';
import Searc_Panel from '../../components/search-panel/search-panel';
import Footer from '../../components/footer/Footer';
import Admin from '../admin/Admin';
import Admin_reg from '../admin-reg/Admin-reg';
import { ToastContainer, toast } from 'react-toastify';
import students from '../../server/data-contact/contact-student'

import { useForm } from 'react-hook-form';
const Main = (props) => {
    const [auth, setAuth] = useState(true)
    const [adminReg, setAdminReg] = useState(false);
    const [loading, setLoading] = useState(false)
    const [studNum, setStudNum] = useState(students)
    const [h1, setH1] = useState([])

    const signAdmin = () => {
        setAuth(!auth)
    }

    const exitAdmin = () => {
        setAuth(!auth)
    }

    const handleSub = (state) => {
        setLoading(true)
        // console.log(state.login, state.password)
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
            console.log(adminReg)
            toast.warning('error')
        }
    }

    const logout = () => {
        setAdminReg(!adminReg)
    }

    const onSub =(data)=>{
        // console.log(data)
        // console.log(students)
        if(data.name==='' && data.lastName==='' && data.studContact===''){
            toast.warning('Попольните хотья бы одного!!!')
        };
        const newArr = students.filter(e=> e.aty===data.name )

        setH1([...newArr])
        

    }
    return (
        <>

            {adminReg === true ?
                <div className=''>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} logout={logout} />
                    <div className='d-flex'>
                        <div className='w-50 admin-search'>
                            <Admin_reg />
                        </div>
                        <div className='w-50 admin-search'>
                            <Searc_Panel  onSub={onSub} h1={h1}/>
                        </div>
                        <Footer />
                    </div>
                </div>
                :
                <div className='block'>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} />
                    <Searc_Panel onSub={onSub} h1={h1}/>
                    <Admin loading={loading} auth={auth} exitAdmin={exitAdmin} handleSub={handleSub} />
                    <Footer />
                </div>
            }
            <ToastContainer position='bottom-center'/>
        </>
    );
};

export default Main;
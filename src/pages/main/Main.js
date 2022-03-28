import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header_Menu from '../../components/header-menu/Header-Menu';
import Searc_Panel from '../search-panel/Searc-Panel';
import Footer from '../../components/footer/Footer';
import Admin from '../admin/Admin';
import Admin_reg from '../admin-reg/Admin-reg';
const Main = (props) => {
    const [auth, setAuth] = useState(true)
    const [adminReg, setAdminReg] = useState(false)
    const signAdmin = () => {
        setAuth(!auth)
    }

    const exitAdmin = () => {
        setAuth(!auth)
    }

    const handleSub = (state) => {
        // console.log(state.login, state.password)
        if (state.login === 'users' && state.password === '12345678') {
            setAdminReg(!adminReg)
            setAuth(!auth)
            state.login = ''
            state.password = ''
            console.log(adminReg)
        } else {
            setAdminReg(adminReg)
            state.login = ''
            state.password = ''
            console.log(adminReg)
        }
    }
    return (
        <>

            {adminReg === true ?
                <div className=''>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} />
                    <div className='d-flex'>
                        <div className='w-50 admin-search'>
                            <Admin_reg />
                        </div>
                        <div className='w-50 admin-search'>
                            <Searc_Panel />
                        </div>
                    </div>
                </div>
                :
                <div className='block'>
                    <Header_Menu admin={signAdmin} adminReg={adminReg} />
                    <Searc_Panel />
                    <Admin auth={auth} exitAdmin={exitAdmin} handleSub={handleSub} />
                    <Footer />
                </div>
            }
        </>
    );
};

export default Main;
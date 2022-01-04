/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React,{useEffect,useState}from 'react'
import { useHistory } from 'react-router-dom';
import '../../node_modules/antd/dist/antd.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import exera from '../images/exera.png';

export default function Login() {

    let history = useHistory();
    function login(){
        history.push('/Index');
    }
          
    useEffect(() => {
        
       
    }, [])
    return (
        <div className='loginPage'>
           <div className="container">

               {/* row  */}
               <div className="row mb-2">
                   <div className="col-lg-12">
                       <div className='bg-img text-center'>
                            <img src={exera} alt="img" className='img-fluid' style={{ height:300 }}/>
                       </div>
                   </div>
               </div>
               {/* end row */}

               {/* row */}
               <div className="row">
                   <div className="col-lg-4 offset-lg-4">
                        <div className='mb-2'>
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username :</label>
                                    <input type="text" class="form-control" id="username" placeholder='Enter Username...'/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password :</label>
                                    <input type="password" class="form-control" id="password" placeholder='Enter Password...' />
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={login}>Sign In</button>
                            </form>
                       </div>
                        <p>Having problems signing in ? please contact our support staff via email <b>support@exera.asia</b> for assistance</p>
                   </div>
               </div>
               {/* end row */}
           </div>
        </div>
    )
}

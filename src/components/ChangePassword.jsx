import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom';

export default function ChangePassword() {
    let [inputTypeOldPassword,setInputTypeOldPassword] = useState('');
    let [inputTypeNewPassword,setInputTypeNewPassword] = useState('');
    function hideShowOldPassword(){
        if(inputTypeOldPassword == "password"){
            setInputTypeOldPassword('text')
        }else{
            setInputTypeOldPassword('password')
        }
    }
    function hideShowNewPassword(){
        if(inputTypeNewPassword == "password"){
            setInputTypeNewPassword('text')
        }else{
            setInputTypeNewPassword('password')
        }
    }
    useEffect(() => {
        setInputTypeOldPassword('password');
        setInputTypeNewPassword('password');
    }, [])
    return (
        <div className='changePassword'>
            <div className="container">
                <form action="">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <label for="oldPassword" className="form-label">Old Password: </label>
                            <div className="input-group mb-3">
                                <input type={inputTypeOldPassword} className="form-control" id="oldPassword" placeholder="Old Password..." />
                                <a><span className="input-group-text" id="basic-addon2" onClick={hideShowOldPassword}>{inputTypeOldPassword == "password" ? (<i className="bi bi-eye-slash-fill"></i>) : (<i className="bi bi-eye-fill"></i>) }</span></a>
                            </div>
                            <label for="newPassword" className="form-label">New Password: </label>
                            <div className="input-group mb-3">
                                <input type={inputTypeNewPassword} className="form-control" id="newPassword" placeholder="New Password..." />
                                <a><span className="input-group-text" id="basic-addon2" onClick={hideShowNewPassword}>{inputTypeNewPassword == "password" ? (<i className="bi bi-eye-slash-fill"></i>) : (<i className="bi bi-eye-fill"></i>) }</span></a>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-primary mx-1'>Save</button>
                                <Link to='/Index'><button className='btn btn-primary mx-1'>Cancel</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import backgroundLogin from '../../asset/img/loginImg.jpg'
import { validation } from './validation';
// import { useEffect } from 'react';

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})
    // const [loading, setLoading] = useState(false)
    // const [check, setCheck] = useState(0)
    const navigate = useNavigate()

//     useEffect(()=> {
//         if(check > 0) {
//             setLoading(true)
//             setTimeout(() => {
//                 setLoading(false)
//             }, 2000)
//         }
//    }, [check])
   
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError(validation({email, password}))
        // signInWithEmailAndPassword(auth, email, password)
        // .then(() => { 
        //     setCheck(check+1)
        //     setTimeout(()=> {
        //         navigate("/shopping-project")
        //     }, 2000)  
        // }) 
        // .catch(() => {
        //     toast.error("Địa chỉ email hoặc mật khẩu không chính xác!")
        // })
    }
    
    return (
        <>
       {/* { loading ? <Loading />:<p></p>} */}
        <div className='login_container' style={{backgroundImage:`url(${backgroundLogin})`}}>
            <div className='login_wrap' >
                <p>ĐĂNG NHẬP</p>
                <form className='login_content'>
                    <div className='login_email'>
                        <label className='label'>Email</label>
                        <input 
                            type='email' 
                            className='login_input' 
                            placeholder='abc123@gmail.com'
                            name='email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                         {error.email && <p id='error'>{error.email}</p>}
                    </div>

                    <div className='login_password'>
                        <label className='label'>Password</label>
                        <input 
                            type='password' 
                            className='login_input' 
                            placeholder='Mật khẩu của bạn' 
                            name='password' 
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                        />
                         {error.password && <p id='error'>{error.password}</p>}
                    </div>

                    <div className='login_submit'>
                        <button  onClick={handleFormSubmit}>
                            Đăng nhập
                        </button>
                    </div>
                </form>

                <div className='login_footer'>
                    <span>Nếu bạn chưa có tài khoản, hãy</span>
                    <Link to='/register'>Đăng kí ngay</Link>
                </div>
            </div>
        </div>
        </>

    );
}

export default Login;
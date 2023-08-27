import React, { useState } from 'react'
import './LoginSignup.css'
import person_icon from '../Assets/person.png'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <img src={person_icon} style={{ width: '20px' }}  alt="" />
                <input type="text" placeholder="Name" />
            </div>
            }

            
            <div className="input">
                <img src={email_icon} style={{ width: '20px' }} alt="" />
                <input type="email" placeholder="Email ID" />
            </div> 
            <div className="input">
                <img src={password_icon} style={{ width: '20px' }} alt="" />
                <input type="password" placeholder="Password" />
            </div>   
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from './asset/logo2.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'

export const Login =()=>{
    const navigate = useNavigate()
    const [emaildata,setemaildata] = useState('');
    const [passworddata,setpassworddata]= useState('');

    const handleSubmit=(ev) =>{
        ev.preventDefault();
        
        if (emaildata.trim() === "" || passworddata.trim() === ""){
            toast.warn("plsss enter both details")
        }
        else{
            localStorage.setItem("LoggedIn","true");
            navigate("/main")
        }
    }

    return(
    <div>
        <div className='Icon' >
                    <a href="https://www.amazon.in/ref=nav_logo" target='_blank' >
                        <span>
                            <img src={logo2} alt="" />
                            </span>
                    </a>
        </div>
        <div className='loginbody'>
        <div className="card">

           <form action="" onSubmit={handleSubmit}>
             <h3 className='signtext'>Sign in or create account</h3>               
            <span className='entertext'>Enter mobile number or email</span>
            <input className='email' type="email" value={emaildata} onChange={(ev) => setemaildata(ev.currentTarget.value)}/>
            <br />
            <h4 className='passwordtext'>Password</h4>
            <input className='email' type="password" value={passworddata} onChange={(ev) => setpassworddata(ev.currentTarget.value)}/>
            <button className='submitbutton' type="submit">Login</button>
           </form>

        </div>
        </div>
    </div>
    )    
}
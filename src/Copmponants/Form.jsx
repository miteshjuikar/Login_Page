import React, { useState } from 'react'
import style from "../Style_Files/Form.module.css";
import errorIcon from "../assets/triangle.svg";

export default function Form() {

    const [formData, setFormData] = useState({emailId : "", password : ""});
    const handleChange = (e) => {
        setFormData({...formData, 
            [e.target.id] : e.target.value}
        )
    }
    console.log(formData);

  return (
    <div className={style.mainForm}>
        <div className={style.mainForm1}>
            <div>
                <h4>Login</h4>
            </div>
            <div className={style.mainInputField}>
                <input className={style.inputField} type="text" id='emailId' value={formData.emailId} placeholder='Entet Email Id' onChange={handleChange}/>
                <input className={style.inputField} type="text" id='password' value={formData.password} placeholder='Enter Password' onChange={handleChange}/>
                <label htmlFor="Incorrect Password"><img src={errorIcon} alt="Error Icon"/><div>Incorrect Email Or Password</div></label>
            </div>
            <button>Log In</button>
                <a href="/">Forget your password?</a>
        </div>
    </div>
  )
}

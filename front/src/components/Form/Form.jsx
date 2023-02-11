import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'
import validation from './validation.js'

function Form(props) {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    }
    )

    const handleInputsChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value 
        })

        setErrors(validation(
            {...userData,
            [e.target.name] : e.target.value}
        ))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
       
    }


  return (
    <div>
        <form className={styles.formBody} onSubmit={handleSubmit}>
            <p>Welcome to Rick & Morty Gallery</p>
            <div>
                <label>Username: </label>
                <input type="text" name='username' value={userData.username} onChange={handleInputsChange}/>
                <br />
                <span className={styles.danger}>{errors.username}</span>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name='password' value={userData.password} onChange={handleInputsChange}/>
                <br />
                <span className={styles.danger}>{errors.password}</span>
            </div>
            
            <button 
                type='submit'
                className={styles.btn}
            >
                Sing In
            </button>
        </form>
    </div>
  )
}

export default Form
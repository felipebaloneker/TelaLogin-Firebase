import React from 'react';

const Login =(props) =>{
    const {
        email,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        emailError,
        passwordError,
        } = props;

    return(
        <section className='login'>
            <div>
                <label>Username</label>
                <input type='text' autoFocus required value={}/>
            </div>
        </section>    
    )
}

export default Login;
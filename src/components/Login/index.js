import React from 'react';
const Login =(props) =>{
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        } = props;

    return(
        <section className='login'>
            <div className='logincontainer'>
                <label>Username</label>
                <input 
                    type='email' 
                    autoFocus 
                    required 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <p className='errorMsg'>{emailError}</p>

                <label>Password</label>
                <input 
                    type='password' 
                    required 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>SignIn</button>
                            <p>Don`t have an account? <span onClick={() => setHasAccount(!hasAccount)}>SignUp</span></p>
                        </>
                    ): (
                        <>
                            <button onClick={handleSignup}>SignUp</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>SignIn</span></p>
                        </>
                    )}

                </div>
            </div>
        </section>    
    )
}

export default Login;
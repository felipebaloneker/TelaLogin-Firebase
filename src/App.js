import React, {useState, useEffect} from 'react';
import fire from './services/fire';
import Login from './components/Login'


export default () =>{
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false)
  
  //
  const clearLoginInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearLoginErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  // Login com usuario existente
  const handleLogin = () =>{
    clearLoginErrors();
    fire
    .auth()
    .singInWithEmailAndPassword(email, password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  // Criando cadastro do Usuario no banco
  const handleSignup= () =>{
    clearLoginErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err)=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  // Logout do usuario no banco
  const handleLogout = () =>{
    fire.auth().signOut();
  };

  const authListener =() =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearLoginInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    });

  }
  useEffect(()=>{
    authListener();
  },[]);

  return(
    <div className='App'>
      <Login 
      email={email} 
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />

    </div>
  );
}
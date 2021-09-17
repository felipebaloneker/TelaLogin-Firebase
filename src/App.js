import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './firebase';

export default () =>{
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false)
  
  const handleLogin = () =>{
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

  const handleSingup= () =>{
    fire
    .auth()
    .singInWithEmailAndPassword(email, password)
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


  return(
    <>
      Hello World!!
    </>
  );
}
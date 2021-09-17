import React, {useState, useEffect} from 'react';
import fire from './services/fire';

export default () =>{
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false)
  
  // Login com usuario existente
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

  // Criando cadastro no banco
  const handleSignup= () =>{
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

  const handleLogout = () =>{
    fire.auth().signOut();
  };

  const authListener =() =>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      }
      else{
        setUser("");
      }
    });

  }


  return(
    <>
      Hello World!!
    </>
  );
}
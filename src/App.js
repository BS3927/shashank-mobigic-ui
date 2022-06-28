import React,{useState,useEffect} from 'react';
import './App.css';
import { BeforeLogin } from './BeforeLogin/BeforeLogin';
import { AfterLogin } from './AfterLogin/AfterLogin';
import { Header } from './Common/Header';
import { Footer } from './Common/Footer';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  useEffect(()=>{
    let _isLoggedIn=sessionStorage.isLogged
    if(_isLoggedIn){
      setIsLoggedIn(_isLoggedIn)
    }
  },[])
  const getLoginInfo=(data)=>{
    setIsLoggedIn(data)
  }
  const fnLogout=()=>{
    sessionStorage.clear();
    setIsLoggedIn(false)
  }
  return (
    <div className="App">
      <Header/>
      {isLoggedIn ? <AfterLogin fnLogout={fnLogout} />
      :<BeforeLogin getLoginInfo={getLoginInfo} />}
      <Footer/>
    </div>
  );
}

export default App;

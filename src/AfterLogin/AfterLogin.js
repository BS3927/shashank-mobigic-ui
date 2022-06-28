import React,{ useState } from 'react'
import { Form } from './Form'
import './afterLogin.css'
import { Profile } from './Profile'

export const AfterLogin = (props) => {
  const [menuItom,setMenuItom]=useState()
  const fnMenuClick=(opt)=>{
    setMenuItom(opt)
  }
  return (
    <div>
      <ul className='menu'>
        <li onClick={()=>fnMenuClick(1)}>Form</li>
        <li onClick={()=>fnMenuClick(2)}>Profile</li>
        <li id='logout' onClick={()=>props.fnLogout()}>Logout</li>
      </ul>
      {menuItom === 1 && <Form/>}
      {menuItom === 2 &&<Profile/>}
    </div>
  )
}

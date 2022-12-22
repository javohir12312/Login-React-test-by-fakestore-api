import React from 'react'
import { useState } from 'react'
import style from "./Login.module.scss"
import axios from 'axios'


const Login = () => {

  const [inp, setInp] = useState(false)
  const [name, setName] = useState()
  const [pass, setPass] = useState()

  function checked(e) {
    if(e.target.checked){
      setInp(true)
    }else{
      setInp(false)
    }
    console.log(inp);
  }

  function submit(e){
    e.preventDefault()

    const getData = async data => {
      try {
        const data = await axios({
          method: 'POST',
          url: 'https://fakestoreapi.com/auth/login',
          data: {
            username: name,
            password: pass
          }
      })
      window.localStorage.setItem('token', data.data.token)
      console.log(data.data.token);
      } catch (error) {
        console.log('err');
      }
    }
    getData()
  }

  function Login() {
  setTimeout(() => {
     if(window.localStorage.getItem('token')){
       window.location.pathname = '/Home' 
      }else{
         window.location.pathname = '/'
        }
      
    }, 1500);
  }


  return (
    <div className={style.login_box}>
      <form className='form-control' onSubmit={submit}>
        <input type="text" name="" id="" placeholder='Username' onChange={(e) => setName(e.target.value)}/>
        <input type="password" name="" id=""  placeholder='Your password'  onChange={(e) => setPass(e.target.value)}/>
        <span className={inp ? style.remember : style.defremember}><input onChange={checked} type="checkbox" id='1'/><label htmlFor="1">Remember Me</label></span>
        <button onClick={() => Login()} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
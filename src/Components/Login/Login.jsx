import React from 'react';
import './Login.scss';
import '../../App.scss';
import { Link, NavLink } from 'react-router-dom';


import video from '../../LoginAssets/videoai.mp4'
import logo from '../../LoginAssets/logoai.jpg'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill  } from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>


          <div className="textDiv">
            <h2 className="title">UNIVERSIDAD CENTRAL DEL ECUADOR</h2>
            <p>Introducción a la AI</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Olvidaste tu cuenta?</span>
            <Link to={'/register'}>
              <button className="btn">Login  </button>´
            </Link>
          </div>
        </div>

        <div className="container2">

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h3> Bienvenido!</h3>
          </div>
        </div>


        <form action="" className='form grid'>
          <span>Ingrese con sus datos</span>
          
          <div className="inputDiv">
            <label htmlFor="username">Usuario</label>
            <div className="input flex">
              <FaUserShield className='icon'/>
              <input type="text" id='username' placeholder='Ingrese su usuario' />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Contraseña</label>
            <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Ingresa su contraseña' />
            </div>
          </div>

          <button type='submit' className='btn flex'>
            <span className='showMessage'>Login</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

           <a href="/dashboard">Dashboard</a>

          <span className="forgotPassword">
             Olvido su contraseña? <a href="">Click Here</a>
          </span>
        </form>
        </div>

        
      </div>
    </div>
  )
}

export default Login 
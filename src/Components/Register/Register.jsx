import React from 'react'
import './Register.scss';
import '../../App.scss';
import { Link, NavLink } from 'react-router-dom';


import video from '../../LoginAssets/videoai.mp4'
import logo from '../../LoginAssets/logoai.jpg'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill  } from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from  'react-icons/md'

const Register = () => {
  return (
    <div className='RegisterPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>


          <div className="textDiv">
            <h2 className="title">UNIVERSIDAD CENTRAL DEL ECUADOR</h2>
            <p>Introducción a la AI</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Tienes una cuenta?</span>
            <Link to={'/login'}>
              <button className="btn">Login  </button>´
            </Link>
          </div>
        </div>

        <div className="container2">

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h3> Registrate con nosotros!</h3>
          </div>
        </div>


        <form action="" className='form grid'>
        
          
          <div className="inputDiv">
            <label htmlFor="username">Usuario</label>
            <div className="input flex">
              <MdMarkEmailRead className='icon'/>
              <input type="text" id='username' placeholder='Ingrese su usuario' />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="email ">Email</label>
            <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="email" id='email' placeholder='Ingrese su email ' />
            </div>
          </div>

          <button type='submit' className='btn flex'>
            <span className='showMessage'>Register</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <span className="forgotPassword">
             Olvido su contraseña? <a href="">Click Here</a>
          </span>
        </form>
        </div>

        
      </div>
    </div>
  )
}

export default Register
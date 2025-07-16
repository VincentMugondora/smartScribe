import React from 'react';
import './SignUp.css';
import Input from '../components/input/Input';
import Password from '../components/input/Password';
import Buttons from '../components/buttons/Buttons';
import { Link } from 'react-router-dom';
import LogoPlaceholder from '../assets/smart_logo.png';
import GoogleIcon from '../assets/google_icon.png'
import GoogleIconDark from '../assets/google_icon_dark.png'
import AppleIcon from '../assets/apple_icon.png'
import AppleIconDark from '../assets/AI_icon_sideBar_light.png'
import FacebookIcon from '../assets/facebook_icon.png'
import FacebookIconDark from '../assets/facebook_icon_dark.png'



export default function SignUp({ theme }) {
        const Google = theme === 'light' ? GoogleIcon : GoogleIconDark
        const Apple = theme === 'light' ? AppleIcon : AppleIconDark
        const Facebook = theme === 'light' ? FacebookIcon : FacebookIconDark
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={LogoPlaceholder} alt="Smart Logo" className="smart-logo" />
        <h1>Welcome back!</h1>
        <p>
          To keep connected with us please<br />
          login with your personal info
        </p>
        <Buttons btn={{ name: 'Login', path: '/login' }} />
      </div>

      <div className="signup-right">
        <h1>Create Account</h1>
        <div className="name-inputs">
          <Input theme={theme} placeholder="First Name" />
          <Input theme={theme} placeholder="Second Name" />
        </div>
        <Input theme={theme} placeholder="Username" />
        <Password theme={theme} />

        <div className="save-password">
          <input type="checkbox" id="save-password" />
          <label htmlFor="save-password">Save Password?</label>
        </div>

        <Buttons btn={{ name: 'Sign Up', path: '/' }} />

        <div className="divider">or continue with</div>
        <div className="socials">
          <Link to='https://www.google.com/'>
            <img src={Google} alt="Google" />
          </Link> 
          <img src={Apple} alt="Apple" />
          <img src={Facebook} alt="Facebook" />
        </div>
      </div>
    </div>
  );
}

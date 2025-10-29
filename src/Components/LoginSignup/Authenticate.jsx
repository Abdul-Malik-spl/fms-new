import React, { useState, useCallback } from 'react';
import { Login } from './Login';
import { Signup } from './Signup'; // create this component
import './LoginSignup.css';
import logo from '../image/fmslogo.png';
import googlelogo from '../image/googlelogo.png'
import instalogo from '../image/insta.jpg'
export const Authenticate = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleLoginClick = useCallback(() => {
    setActiveTab('login');
  }, []);

  const handleSignupClick = useCallback(() => {
    setActiveTab('signup');
  }, []);

  return (
    <div style={{ height: '100vh',width:"100vw",overflowX:"hidden" }}>
      <nav className='navaAuthenticate'>
        <img src={logo} className='img-logo' />
        <div className='toggle-btn'>
          <div
            className={activeTab === 'login' ? 'activePage' : ''}
            onClick={handleLoginClick}
          >
            Login
          </div>
          <div
            className={activeTab === 'signup' ? 'activePage' : ''}
            onClick={handleSignupClick}
          >
            SignUp
          </div>
          <div
            className='toggle-indicator'
            style={{
              left: activeTab === 'login' ? '5px' : '70px'
            }}
          />
        </div>
      </nav>
      {activeTab === 'login' ? <Login /> : <Signup />}
      <div className='authPageAftersec'>
        <div className='social-handles'>
          {/* <h1>Social Handles</h1> */}
          <a href='https://vinsupinfotech.com/' target='_blanks'><img src={googlelogo} className='social-logos'/></a>
          <a href='https://www.instagram.com/vinsup_global/' target='_blanks'><img src={instalogo} className='social-logos'/></a>
        </div>
        <span className='copyrightscls'>&copy;Vinsup-2025</span>
      </div>
    </div>
  );
};



// import React,{useCallback} from 'react'
// import { Login } from './Login'
// import './LoginSignup.css'
// import logo from '../image/fmslogo.png'
// export const Authenticate = () => {

//   const handleLoginClick = useCallback(() => {
   
//   }, []);

//   const handleSignupClick = useCallback(() => {
 
//   }, []);
//   return (
//     <div style={{height:"100vh"}}>
//       <nav className='navaAuthenticate'>
//         <img src={logo} className='img-logo'/>
//         <div className='toggle-btn'>
//           <div onClick={handleLoginClick}>Login</div>
//           <div onClick={handleSignupClick}>SignUp</div>
//           </div>
//       </nav>
//         <Login/>
//     </div>
//   )
// }

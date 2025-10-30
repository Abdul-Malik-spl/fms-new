import React, { useRef,useState } from 'react';
import "./forgetPassword.css";
import { MdCancel } from 'react-icons/md';
import CleaningLoader from '../LoadingPage';
export const ForgetPassword = ({ closeOtpBox }) => {
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };
function otpSubmit(){
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
     alert("OTP Submitted");
   }, 3000);
}
  return (
    <div className='fp-page'>
        {loading ? <CleaningLoader /> : ""}
      <div className='cardFp'>
        <span className='cancelBtnSec'><MdCancel color='red' size={30} className='cbtn' onClick={()=>closeOtpBox()}/></span>
        <h6 style={{ textAlign: "center",color:"gray", }}>We send OTP to your email</h6>
        <div style={{ textAlign: "center",color:"gray", }}>malik.vinsup@gmail.com</div>
        <div className='txtBoxSecFp'>
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type='text'
              maxLength={1}
              className='fp-box'
              ref={(el) => inputsRef.current[i] = el}
              onChange={(e) => handleChange(e, i)}
            />
          ))}
        </div>
        <button className='otpBtn' onClick={otpSubmit}>Submit OTP</button>  
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from "react";
import "./LoginSignup.css";
import { InputNlabel } from "../InputNlabel/InputNlabel";
import adminFormLogo from "../image/adminformlogo.png";
import { ForgetPassword } from "./ForgetPassword";
import CleaningLoader from "../LoadingPage";
export const Login = ({adminLog}) => {
  let [loading, setLoading] = useState(false);
  let inpRefs = useRef([]);
  let [forgetPasswordOtpBox,setForgetPasswordOtpBox]=useState(false);
  let [userData, setUserData] = useState({
    adminName: "",
    adminPass: "",
    errors: { adminName: false, adminPass: false },
  });
  let [rememberMe, setRememberMe] = useState(false);
  let classes = {
    lblcls: "",
    inpcls: "adminTxtBox",
    errCls: "errormsg",
    rowcon: "adminFormRowCon",
  };
  let formData = [
    {
      rowCon: classes.rowcon,
      lblCls: classes.lblcls,
      inpId: "adminName",
      lblName: `${adminLog?"Admin":"User"} Name/Mail*`,
      placeholder: `Enter ${adminLog ? "Admin" : "User"} Name/Mail`,
      inpType: "text",
      inpCls: classes.inpcls,
      inpName: "adminName",
      inpValue: userData.adminName,
      inpValGetFun: inpValueGet,
      errorShow: userData.errors.adminName,
      errMsg: `Please Enter ${adminLog ? "Admin" : "User"} Name/Mail`,
      errorSpanCls: classes.errCls,
    },
    {
      rowCon: classes.rowcon,
      lblCls: classes.lblcls,
      inpId: "adminPass",
      lblName: "Password*",
      placeholder: `Enter ${adminLog ? "Admin" : "User"} Password`,
      inpType: "password",
      inpCls: classes.inpcls,
      inpName: "adminPass",
      inpValue: userData.adminPass,
      inpValGetFun: inpValueGet,
      errorShow: userData.errors.adminPass,
      errMsg: `Please Enter ${adminLog ? "Admin" : "User"} Password`,
      errorSpanCls: classes.errCls,
    },
  ];

  useEffect(() => {
    inpRefs.current = formData.slice(0, formData.length);
  }, [formData.length]);

  function inpValueGet(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      errors: { ...userData.errors, [e.target.name]: false },
    });
  }
  function handleKeyDown(eve, ind) {
    if (eve.key == "Enter") {
      eve.preventDefault();
      let nextIndex = ind + 1;
      if (
        nextIndex < inpRefs.current.length &&
        inpRefs.current[nextIndex]?.focus
      ) {
        inpRefs.current[nextIndex].focus();
      } else {
        AdminLogin(eve);
      }
    }
  }
  function AdminLogin(e) {
    e.preventDefault();
    let errors = {
      adminName: !userData.adminName,
      adminPass: !userData.adminPass,
    };
    if (!userData.adminName || !userData.adminPass) {
      setUserData({ ...userData, errors });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`${adminLog?"Admin":"User"} Logged In Successfully`);
    }, 3000);
    // alert(userData);
  }
  function closeOtpBox(){
    setForgetPasswordOtpBox(false);
  }
  function ForgetPasswordFun(){
    if(userData.adminName){
      if(userData.adminName.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)){
    setForgetPasswordOtpBox(true);
  }
    else{
      alert("Please enter correct email address to proceed");
    }
  }else{
    alert("Please enter your registered email to proceed");
  }
}
  console.log(rememberMe);

  return (
    <div
      className="d-flex align-items-center justify-content-center h-75 "
      style={{ overflow: "hidden" }}
    >
      {loading ? <CleaningLoader /> : ""}
     {forgetPasswordOtpBox?<ForgetPassword closeOtpBox={closeOtpBox} userMail={userData.adminName}/>:""} 
      <form className="border adminLoginForm">
        <img src={adminFormLogo} className="adminPageLogoImg" />
        {formData.map((obj, index) => (
          <InputNlabel
            key={obj.inpId}
            {...obj}
            onRef={(el) => (inpRefs.current[index] = el)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
        <div className="rememberforgetsec">
          <span className="d-flex gap-2">
            <input
              type="checkbox"
              id="cbremember"
              onChange={() => setRememberMe((prev) => !prev)}
            />
            <label htmlFor="cbremember" className="lblRemeberMe">
              Remember Me
            </label>
          </span>
          <span className="fpasslink" onClick={() =>ForgetPasswordFun()}>Forget Password?</span>
        </div>
        <div className={classes.rowcon}>
          <button onClick={AdminLogin} className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

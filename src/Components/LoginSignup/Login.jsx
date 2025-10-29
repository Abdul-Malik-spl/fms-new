import React, { useState, useRef, useEffect } from "react";
import "./LoginSignup.css";
import { InputNlabel } from "../InputNlabel/InputNlabel";
import adminFormLogo from "../image/adminformlogo.png";
export const Login = ({adminLog}) => {
  let inpRefs = useRef([]);
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
      placeholder: "Enter User Name",
      inpType: "text",
      inpCls: classes.inpcls,
      inpName: "adminName",
      inpValue: userData.adminName,
      inpValGetFun: inpValueGet,
      errorShow: userData.errors.adminName,
      errMsg: "Please Enter Admin Name",
      errorSpanCls: classes.errCls,
    },
    {
      rowCon: classes.rowcon,
      lblCls: classes.lblcls,
      inpId: "adminPass",
      lblName: "Password*",
      placeholder: "Enter Password",
      inpType: "password",
      inpCls: classes.inpcls,
      inpName: "adminPass",
      inpValue: userData.adminPass,
      inpValGetFun: inpValueGet,
      errorShow: userData.errors.adminPass,
      errMsg: "Please Enter Admin Password",
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
    alert(userData);
  }
  console.log(rememberMe);

  return (
    <div
      className="d-flex align-items-center justify-content-center h-75 "
      style={{ overflow: "hidden" }}
    >
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
          <span className="fpasslink">Forget Password?</span>
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

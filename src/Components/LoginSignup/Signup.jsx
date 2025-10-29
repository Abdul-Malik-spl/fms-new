import React,{useState,useRef,useEffect} from 'react'
import './LoginSignup.css'
import { InputNlabel } from '../InputNlabel/InputNlabel'
import adminFormLogo from '../image/adminformlogo.png'

export const Signup = () => {
   let inpRefs=useRef([])
   let selectRef=useRef(null)
  let [userData,setUserData]=useState({userName:"",
                                       userPass:"",
                                       userMail:"",
                                       userPhone:"",
                                       userConfirmPass:"",  
                                       selectRole:"",  
                                    errors:{userName:false,
                                            userPass:false,
                                            userMail:false,
                                            userPhone:false,
                                            userConfirmPass:false,
                                            selectRole:false,}})
 
  let classes={lblcls:"",inpcls:"adminTxtBox",errCls:"errormsg",rowcon:"signFormRowCon"}
  let formData=[{rowCon:classes.rowcon,
                  lblCls:classes.lblcls,
                  inpId:"userName",
                  lblName:"User Name*",
                  placeholder:"Enter User Name",
                  inpType:"text",
                  inpCls:classes.inpcls,
                  inpName:"userName",
                  inpValue:userData.userName,
                  inpValGetFun:inpValueGet,
                  errorShow:userData.errors.userName,
                  errMsg:"Please Enter User Name",
                  errorSpanCls:classes.errCls
                },
                {rowCon:classes.rowcon,
                  lblCls:classes.lblcls,
                  inpId:"adminEmail",
                  lblName:"Mail*",
                  placeholder:"Enter Mail",
                  inpType:"text",
                  inpCls:classes.inpcls,
                  inpName:"userMail",
                  inpValue:userData.userMail,
                  inpValGetFun:inpValueGet,
                  errorShow:userData.errors.userMail,
                  errMsg:"Please Enter Mail",
                  errorSpanCls:classes.errCls
                },
                {rowCon:classes.rowcon,
                  lblCls:classes.lblcls,
                  inpId:"userPhone",
                  lblName:"Phone*",
                  placeholder:"Enter Phone",
                  inpType:"text",
                  inpCls:classes.inpcls,
                  inpName:"userPhone",
                  inpValue:userData.userPhone,
                  inpValGetFun:inpValueGet,
                  errorShow:userData.errors.userPhone,
                  errMsg:"Please Enter phone",
                  errorSpanCls:classes.errCls
                },
                 {rowCon:classes.rowcon,
                  lblCls:classes.lblcls,
                  inpId:"userPass",
                  lblName:"Password*",
                  placeholder:"Enter Password",
                  inpType:"text",
                  inpCls:classes.inpcls,
                  inpName:"userPass",
                  inpValue:userData.userPass,
                  inpValGetFun:inpValueGet,
                  errorShow:userData.errors.userPass,
                  errMsg:"Please Enter Password",
                  errorSpanCls:classes.errCls},
                  
                 {rowCon:classes.rowcon,
                  lblCls:classes.lblcls,
                  inpId:"adminCPass",
                  lblName:"Confirm Password*",
                  placeholder:"Enter Confirm Password",
                  inpType:"password",
                  inpCls:classes.inpcls,
                  inpName:"userConfirmPass",
                  inpValue:userData.userConfirmPass,
                  inpValGetFun:inpValueGet,
                  errorShow:userData.errors.userConfirmPass,
                  // errMsg:"Please Enter confirm Password",
                  errMsg:!userData.userConfirmPass? "Enter confirm Password": userData.userPass && userData.userConfirmPass && userData.userPass !== userData.userConfirmPass? "Passwords do not match": "",

                  errorSpanCls:classes.errCls},
              ]
              useEffect(()=>{
                inpRefs.current=formData.slice(0,formData.length)
              },[formData.length])
             
  
              function inpValueGet(e){
                setUserData({...userData,[e.target.name]:e.target.value,errors:{...userData.errors,[e.target.name]:false}})
                
              }
               

               function handleKeyDown(eve,ind){
                if(eve.key=='Enter'){
                  eve.preventDefault()
                  let nextIndex=ind+1
                  if(nextIndex<inpRefs.current.length && inpRefs.current[nextIndex]?.focus){
                    inpRefs.current[nextIndex].focus()

                  }else{
                    selectRef.current.focus()
                  
                  }
                }
              }

              function dataSubmit(e){
            e.preventDefault()
               let  errors={
                  userName:!userData.userName,
                  userPass:!userData.userPass,
                  userMail:!userData.userMail,
                   userPhone:!userData.userPhone,
                   userConfirmPass:!userData.userConfirmPass,                    
                  selectRole:!userData.selectRole          
                }
                 const passwordsMatch = userData.userPass === userData.userConfirmPass
               if (!passwordsMatch) {
                       errors.userConfirmPass = true
                       }
                 if (Object.values(errors).includes(true)) {
               setUserData({...userData, errors})
               return
                      }
                alert(userData.selectRole)
                
              }
             function handleSelectKeyDown(e){
               if (e.key === 'Enter') {
                  e.preventDefault();
                  dataSubmit(e)
                            }
             }
  return (
  <div className='d-flex align-items-center justify-content-center h-75 ' style={{overflow:"hidden"}}>
    <form className='border adminSignForm'>
              <img src={adminFormLogo} className='adminPageLogoImg signimg'/>
      {formData.map((obj,index)=><InputNlabel key={obj.inpId} {...obj}
      onRef={el=>inpRefs.current[index]=el} onKeyDown={(e)=>handleKeyDown(e,index)}/>)}
      <div className='roleSelectSec signFormRowCon'>
        <label>Select Role*</label>
        <select className='adminTxtBox' ref={selectRef} onKeyDown={handleSelectKeyDown} name='selectRole' value={userData.selectRole} onChange={inpValueGet}>
          <option value="">select any role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Staff">Staff</option>
        </select>
         <span className="hoverInpBottom"></span>
                     {userData.errors.selectRole?<span className='errormsg'>please select role</span>:""}

      </div>
      <div className='w-100 mt-4'>
        <button className='btn btn-primary w-100' onClick={dataSubmit}>Sign Up</button>
      </div>
    </form>
  </div>
  )
}

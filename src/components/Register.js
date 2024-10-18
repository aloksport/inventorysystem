import axios from "axios";
import { useState } from "react";
import validator from "validator";
import Login from "./Login";
function Register(){
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [userpwd, setUserPwd] = useState("");
  const [cnfuserpwd, setCnfUserPwd] = useState("");
  /*const [formData, setFormData] = useState({
    name: '',
    email_address: '',
    user_pwd:'',
    cnf_user_pwd:'',
  });*/
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    if(e.target.name==='name'){
      setName(e.target.value);
    }
    if(e.target.name==='email_address'){
     setEmailAddress(e.target.value);
    }
    if(e.target.name==='user_pwd'){
      setUserPwd(e.target.value);
    }
    if(e.target.name==='cnf_user_pwd'){
      setCnfUserPwd(e.target.value);
    }
};
const submitUserRegister= (e)=>{
  e.preventDefault();
  const newErrors = validateUserRegisterForm();
  console.log(newErrors);
  setErrors(newErrors);
  alert(Object.keys(newErrors).length);
  if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully!');
     // console.log(formData);
     axios
     .post("http://localhost/api/register.php", {
       name: name,
       email_address: email_address,
       userpwd: userpwd,
       cnfuserpwd:cnfuserpwd
     })
     .then((response) => {
       console.log(response);
       
     })
     .catch((error) => {
       console.error(error);
     });
  } else {
      //alert('Form submission failed due to validation errors.');
  }
};
const validateUserRegisterForm = () => {
  const errors = {};
  if (!name) {
    errors.name = 'Name is required';
  }
  if (!email_address) {
    errors.email_address = 'Email address is required';
  } else{
    if (!validator.isEmail(email_address)) {
      errors.email_address = 'Email address is not valid';
    }
  }
  if (!userpwd) {
    errors.user_pwd = 'Password is required';
  }
  if (!cnfuserpwd) {
    errors.cnf_user_pwd = 'Confirm Password is required';
  }
  if(userpwd !=='' && cnfuserpwd !==''){
      if(userpwd !== cnfuserpwd){
        errors.cnf_user_pwd = 'Password and Confirm Password must be same';
      }
  }
  return errors;
}
  if(inputValue==='login'){
    return (
        <Login/>
    ) 
} else{
    return(
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                  <img src="./images/logo.png" alt="logo"/>
                  </div>
                  <h4>New here?</h4>
                  <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                  <form className="pt-3" onSubmit={submitUserRegister}>
                    <div className="form-group">
                      <input onChange={handleChange} type="text" className="form-control form-control-lg" name="name" id="nameID" placeholder="Name"/>
                      {errors.name && (
                        <span className="text-danger">
                            {errors.name}
                        </span>
                    )}
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} type="text" className="form-control form-control-lg" name="email_address" id="email_addressID" placeholder="Email"/>
                      {errors.email_address && (
                        <span className="text-danger">
                            {errors.email_address}
                        </span>
                    )}
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} type="password" className="form-control form-control-lg" name="user_pwd" id="user_pwdID" placeholder="Password"/>
                      {errors.user_pwd && (
                        <span className="text-danger">
                            {errors.user_pwd}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} type="password" className="form-control form-control-lg" name="cnf_user_pwd" id="cnf_user_pwdID" placeholder="Password"/>
                      {errors.cnf_user_pwd && (
                        <span className="text-danger">
                            {errors.cnf_user_pwd}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN UP</button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account? <a href="/#" className="text-primary" onClick={(e) => setInputValue('login')}>Login</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
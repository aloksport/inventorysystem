import { useState } from "react";
import Register from "./Register";
function Login() {
    const [inputValue, setInputValue] = useState("");
    const [formData, setFormData] = useState({
      email_address: '',
      user_pwd: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};
    const handleLogin= (e)=>{
      e.preventDefault();
      const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            //console.log('Form submitted successfully!');
        } else {
            //alert('Form submission failed due to validation errors.');
        }
    }
    const validateForm = (data) => {
      const errors = {};
      errors.email_address = '';
      errors.user_pwd ='';
      if (!data.email_address.trim()) {
        errors.email_address = 'Email address is required';
      }
      if (!data.user_pwd.trim()) {
        errors.user_pwd = 'Password is required';
      }
      return errors;
    }
    if(inputValue==='register'){
        return (
            <Register/>
        ) 
    } else{
     return (        
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="./images/logo.png" alt="logo"/>
                  </div>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3" onSubmit={handleLogin}>
                    <div className="form-group">
                      <input onChange={handleChange} type="text"  name="email_address" className="form-control form-control-lg" id="email_addressID" placeholder="Email Address"/>
                      {errors.email_address && (
                        <span className="text-danger">
                            {errors.email_address}
                        </span>
                    )}
                    </div>
                    <div className="form-group">
                      <input onChange={handleChange} type="password" name="user_pwd" className="form-control form-control-lg" id="user_pwdID" placeholder="Password"/>
                      {errors.user_pwd && (
                        <span className="text-danger">
                            {errors.user_pwd}
                        </span>
                    )}
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">Login</button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account? <a href="/#" className="text-primary" onClick={(e) => setInputValue('register')}>Create</a>
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
   export default Login;
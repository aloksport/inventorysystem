import { useState, useEffect, useRef } from "react";
import Login from "./Login";
function Register(){
  const [inputValue, setInputValue] = useState("");
  if(inputValue=='login'){
    return (
        <Login/>
    ) 
} else{
    return(
        <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div class="brand-logo">
                  <img src="./images/logo.png" alt="logo"/>
                  </div>
                  <h4>New here?</h4>
                  <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="mt-3">
                      <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN UP</a>
                    </div>
                    <div class="text-center mt-4 font-weight-light">
                      Already have an account? <a href="javascript:void(0);" class="text-primary" onClick={(e) => setInputValue('login')}>Login</a>
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
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/login/logo.svg";
import login from "../../Assets/Images/login/login.png";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login__left">
          <div className="login__left--logo">
            <NavLink to="registration">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="login__left--content">
            <h1>Hi, Welcome Back</h1>
            <div className="login__left--content__image">
              <img src={login} alt="login" />
            </div>
          </div>
        </div>

        <div className="login__right">
          <div className="login__right--right-link">
            <p>
              Don't Have An Account?{" "}
              <NavLink to="registration"> Register Now </NavLink>{" "}
            </p>
          </div>

          <div className="login__right--content">
            <div className="login__right--content__form">
              <div className="login__right--content__form--content">
                <h2>Sign In</h2>
                <p>Enter your details below</p>
              </div>

              <div className="login__right--content__form--main-form">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className="input" type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="input" type="password" placeholder="Password" />
                  </Form.Group>
                 <div id="checkbox">
                 <Form.Group className="mb-3" controlId="formBasicCheckbox" id="checkbox">
                    <Form.Check type="checkbox" label="Remember me" id="checkbox__color"/>
                    <Form.Text className="text-muted" id="forgot">
                      <NavLink to="main/dashboard">Forgot Password</NavLink>
                    </Form.Text>
                  </Form.Group>
                 </div>
                  
                 <div className="form__button">
                 <Button variant="primary" type="submit">
                  <NavLink to="main/dashboard">Login</NavLink>
                  </Button>
                 </div>
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

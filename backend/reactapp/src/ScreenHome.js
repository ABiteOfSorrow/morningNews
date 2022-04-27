import React, { useState } from "react";
import "./App.css";
import { Input, Button } from "antd";
import { Link, Redirect } from "react-router-dom";

function ScreenHome() {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPaswword, setSignInPaswword] = useState("");

  const [signUpUserName, setUserName] = useState("");
  const [signUpUserEmail, setUserEmail] = useState("");
  const [signUpUserPassword, setUserPassword] = useState("");

  const [userExists, setUserExists] = useState(false);

  const [listErrorsSignin, setErrorsSignin] = useState([]);
  const [listErrorsSignup, setErrorsSignup] = useState([]);

  var handleSubmitSignIn = async () => {
    const loginData = await fetch("/sign-in", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailFromFrontSignIn=${signInEmail}&passwordFromFrontSignIn=${signInPaswword}`,
    });
    const body = await loginData.json();
    if (body.result == true) {
      setUserExists(true);
    } else {
      setErrorsSignin(body.error);
    }
  };

  var handleSubmitSignUp = async () => {
    const data = await fetch("/sign-up", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `usernameFromFront=${signUpUserName}&emailFromFront=${signUpUserEmail}&passwordFromFront=${signUpUserPassword}`,
    });
    const userData = await data.json();
    if (userData.result == true) {
      setUserExists(true);
    } else {
      setErrorsSignup(userData.error);
    }
  };

  if (userExists) {
    return <Redirect to="/screensource" />;
  }

  var tabErrorsSignin = listErrorsSignin.map((error, i) => {
    return <p>{error}</p>;
  });

  var tabErrorsSignup = listErrorsSignup.map((error, i) => {
    return <p>{error}</p>;
  });

  return (
    <div className="Login-page">
      {/* SIGN-IN */}

      <div className="Sign">
        <Input onChange={(e) => setSignInEmail(e.target.value)} className="Login-input" placeholder="email" />
        <Input.Password onChange={(e) => setSignInPaswword(e.target.value)} className="Login-input" placeholder="password" />
        {/* <Button onClick={() => handleClick()} style={{ width: "80px" }} type="primary"> */}
        {tabErrorsSignin}
        <Button onClick={() => handleSubmitSignIn()} style={{ width: "80px" }} type="primary">
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
        <Input onChange={(e) => setUserName(e.target.value)} className="Login-input" placeholder="username" />
        <Input onChange={(e) => setUserEmail(e.target.value)} className="Login-input" placeholder="email" />
        <Input.Password onChange={(e) => setUserPassword(e.target.value)} className="Login-input" placeholder="password" />
        {/* <Button onClick={() => handleClick()} style={{ width: "80px" }} type="primary"> */}

        {/* <Link to="/screensource"> */}
        {tabErrorsSignup}
        <Button onClick={() => handleSubmitSignUp()} style={{ width: "80px" }} type="primary">
          Sign-up
        </Button>
        {/* </Link> */}
      </div>
      {/* {olle} */}
    </div>
  );
}

export default ScreenHome;

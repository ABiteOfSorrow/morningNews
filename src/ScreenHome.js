import React, { useState } from "react";
import "./App.css";
import { Input, Button } from "antd";
import { Link, Redirect } from "react-router-dom";

function ScreenHome() {
  // const [isLogin, setIsLogin] = useState(true);

  // var handleClick = () => {
  //   setIsLogin(!isLogin);
  // };

  // var olle = null;

  // if (!isLogin) {
  //   olle = <Redirect to="/screensource" />;
  // }

  return (
    <div className="Login-page">
      {/* SIGN-IN */}

      <div className="Sign">
        <Input className="Login-input" placeholder="arthur@lacapsule.com" />

        <Input.Password className="Login-input" placeholder="password" />
        {/* <Button onClick={() => handleClick()} style={{ width: "80px" }} type="primary"> */}
        <Link to="/screensource">
          <Button style={{ width: "80px" }} type="primary">
            Sign-in
          </Button>
        </Link>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
        <Input className="Login-input" placeholder="Arthur G" />

        <Input.Password className="Login-input" placeholder="password" />
        {/* <Button onClick={() => handleClick()} style={{ width: "80px" }} type="primary"> */}

        <Link to="/screensource">
          <Button style={{ width: "80px" }} type="primary">
            Sign-up
          </Button>
        </Link>
      </div>
      {/* {olle} */}
    </div>
  );
}

export default ScreenHome;

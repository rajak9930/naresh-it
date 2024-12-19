import React, { useState } from "react";
import "./Login-Components.css";
const LoginComponent = () => {
  const [isDark, SetIsDarkMode] = useState();

  function handleDarkMode(e) {
    if (e.target.checked) {
      SetIsDarkMode("dark-mode");
    } else {
      SetIsDarkMode("");
    }
  }

  return (
    <div className=" f-flex " style={{width:'500px',height:'500px'}}>
      <form className={isDark}>
        <div className="form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleDarkMode}
          />
          Dark Mode
        </div>
        <h3>Login Page</h3>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" className="form-control" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control" />
          </dd>
        </dl>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LoginComponent;

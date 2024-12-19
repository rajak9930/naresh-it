import React, { useState } from "react";

const EventKeybordComponent = () => {
  const [users] = useState([
    { user: "raja" },
    { user: "raja01" },
    { user: "raja02" },
    { user: "raja03" },
  ]);
  const [msg, setIsMsg] = useState("");
  const [errorClass, setErrorClass] = useState("");
  const [toggle, setToggle] = useState({ display: "" });

  function verifyUserId(e) {
    const inputValue = e.target.value;
    const userExists = users.some((userObj) => userObj.user === inputValue);

    if (userExists) {
      setIsMsg("User Id is already exist - Try Another");
      setErrorClass("text-danger");
    } else {
      setIsMsg("User name Available ");
      setErrorClass("text-success");
    }
  }
  function onKeyPressPassword(e) {
    if ((e.which >= 65 && e.which <= 90) || (e.keyCode >= 97 && e.keyCode <= 90)) {
      setToggle({ display: "block" });
    } else {
      setToggle({ display: "none" });
    }
  }
  return (
    <div className="container-fluid ">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" onKeyUp={verifyUserId} />
        </dd>
        <dd className={errorClass}>{msg}</dd>
        <dd>
          <input type="password" onKeyPress={onKeyPressPassword} />
        </dd>
        <dd style={toggle} className="text-warning">
          waring : password should be in capital letter
        </dd>
      </dl>
    </div>
  );
};

export default EventKeybordComponent;

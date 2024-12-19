import React, { useState } from "react";

const FormComponent = () => {
  const [styleObject, SetStyleObject] = useState({
    border: "",
    boxShadow: "",
  });
  const [UserError, setUserError] = useState("");

  function handleUserName(e) {
    if (
      e.target.value.charCodeAt(0) >= 65 &&
      e.target.value.charCodeAt(0) <= 90
    ) {
      SetStyleObject({
        border: "2px solid green",
        boxShadow: "2px 2px 3px green",
      });
      setUserError("");
    } else {
      SetStyleObject({
        border: "2px solid red",
        boxShadow: "2px 2px 3px red",
      });
      setUserError("Please enter First letter upper case");
    }
  }
  return (
    <>
      <h1>Input form</h1>
      <dl>
        <dt>Name</dt>
        <dd>
          <input
            type="text"
            onBlur={handleUserName}
            placeholder="Name"
            style={styleObject}
          />
          <dd className="text-danger">{UserError}</dd>
        </dd>
      </dl>
    </>
  );
};

export default FormComponent;

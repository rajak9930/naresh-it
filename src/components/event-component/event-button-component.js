import React, { useState } from "react";

const EventButtonComponent = () => {
  const [userName, setUserName] = useState("");
  const [userError, setUserError] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectCityError, setSelectCityError] = useState("");

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit() {
    if (userName.trim() === "") {
      setUserError("Please enter your name");
    } else {
      console.log(userName);
      setUserError("");
    }
    if (selectCity === "no city" || selectCity === "") {
      setSelectCityError("Please select a city");
    } else {
      console.log(selectCity);
      setSelectCityError("");
    }
  }

  function handleOnBlur() {
    if (userName.trim() === "") {
      setUserError("Please enter your name");
    } else {
      setUserError("");
    }
  }

  function handleKeyUp() {
    if (userName.trim() === "") {
      setUserError("Please enter your name");
    } else {
      setUserError("");
    }
  }

  function cityChange(e) {
    if (e.target.value === "no city") {
      setSelectCityError("Please select a city");
    } else {
      setSelectCity(e.target.value);
      setSelectCityError("");
    }
  }
  function onFocusHandle() {
    setUserError("Name is mandatory");
  }

  return (
    <div>
      <dl>
        <dt>UserName</dt>
        <dd>
          <input
            type="text"
            onFocus={onFocusHandle}
            onBlur={handleOnBlur}
            onKeyUp={handleKeyUp}
            onChange={handleUserNameChange}
          />
        </dd>
        <p className="text-danger">{userError}</p>
        <dt>Select City</dt>
        <dd>
          <select onChange={cityChange}>
            <option value="no city">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
            <option value="hyd">Hyderabad</option>
          </select>
        </dd>
        <p className="text-danger">{selectCityError}</p>
      </dl>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EventButtonComponent;

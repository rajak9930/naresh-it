import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FormComponent from "./components/Form-component/Form-component";
import LoginComponent from "./components/login-component/Login-Component";
import EventIndexComponent from "./components/event-component/event-index-component";
import EventMouseComponent from "./components/event-component/event-mouse-component";
import EventKeybordComponent from "./components/event-component/event-keybord-component";
import EventButtonComponent from "./components/event-component/event-button-component";
import EventTimeComponent from "./components/event-component/event-time-component";
import EmiCalculatorComponent from "./components/emi-calculator/emi-calculator-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FormComponent/> */}
    {/* <LoginComponent/> */}
    {/* <EventIndexComponent /> */}
    {/* <EventMouseComponent /> */}
    {/* <EventKeybordComponent/> */}
    {/* <EventButtonComponent/> */}
    {/* <EventTimeComponent/> */}
    <EmiCalculatorComponent />
  </React.StrictMode>
);

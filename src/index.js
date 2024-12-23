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
import TableComponent from "./components/table-component/table-component";
import FormValidationComponent from "./components/form-validation/form-validation-component";
import FormikValidation from "./components/form-validation/Formik-validation";
import ReducerDemo from "./components/reducer-demo/reducer-demo";
import CustomIndex from "./components/hooks/Custom-Index"
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
    {/* <EmiCalculatorComponent /> */}
    {/* <TableComponent
      field={["ID", "Name", "Email", "Phone"]}
      data={[{ id: "1", name: "rr", email: "rk@gmail.com", phone: "12334" }]}
    /> */}
    {/* <FormValidationComponent/> */}
    {/* <FormikValidation /> */}
    {/* <ReducerDemo/> */}
    <CustomIndex/>
  </React.StrictMode>
);

import React from "react";

const EventTimeComponent = () => {
  const [text, setText] = React.useState("");

  function massage1() {
    setText(" Massage 1");
  }
  function massage2() {
    setText(" Massage 2");
  }
  function massage3() {
    setText(" Massage 3");
  }

  var m1, m2, m3;
  function handleShow() {
    m1 = setTimeout(massage1, 2000);
    m2 = setTimeout(massage2, 4000);
    m3 = setTimeout(massage3, 6000);
  }
  function handleCancel() {
    clearTimeout(m2);
  }
  return (
    <div>
      <button onClick={handleShow}>Show </button>
      <button onClick={handleCancel}> Cancel </button>
      <h1>{text}</h1>
    </div>
  );
};

export default EventTimeComponent;

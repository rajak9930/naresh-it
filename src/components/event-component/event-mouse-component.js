import React, { use, useState } from "react";

const EventMouseComponent = () => {
  const [textChange, setTextChange] = React.useState("OnMouseOver");
  const [styleObject, setStyleObject] = useState({
    position: "",
    top: "",
    left: "",
  });

  const [isImg, setIsImg] = useState("assets/images/ph1.jpg");
  

  function handelOver() {
    setTextChange("OnMouseOver");
  }
  function handleMouseOut() {
    setTextChange("onMouseOut");
  }

  function getPosition(e) {
    console.log(e);
    setStyleObject({
      position: "fixed",
      top: e.clientX + "px",
      left: e.clientY + "px",
    });
  }
  function changeImage(e) {
    switch (e.target.id) {
      case "img1":
        setIsImg("assets/images/ph1.jpg");
        break;
      case "img2":
        setIsImg("assets/images/ph2.jpg");
        break;
      case "img3":
        setIsImg("assets/images/ph3.jpg");
        break;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-1">
          <img
            src="assets/images/ph1.jpg"
            id="img1"
            width={50}
            height={50}
            onMouseOver={changeImage}
          />
          <br />

          <img
            src="assets/images/ph2.jpg"
            id="img2"
            width={50}
            height={50}
            onMouseOver={changeImage}
          />
          <br />
          <img
            src="assets/images/ph3.jpg"
            id="img3"
            width={50}
            height={50}
            onMouseOver={changeImage}
          />
          <br />
        </div>
        <div className="col-lg-3">
          <img src={isImg} width={220} height={220} />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onMouseOver={handelOver}
        onMouseOut={handleMouseOut}
      >
        {textChange}
      </button>
      <div onMouseMove={getPosition} style={styleObject}>
        <p>Mouse move Event</p>
      </div>
      <marquee scollamount="10">
        <div className="row">
          <h2> 01 Mouse Over and Out Event 02 Mouse Over and Out Event</h2>
        </div>
      </marquee>
    </div>
  );
};

export default EventMouseComponent;

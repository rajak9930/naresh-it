import React from "react";

const EmiCalculatorComponent = () => {
  const [amount, setAmount] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [rate, setRate] = React.useState(0);
  const [emi, setEmi] = React.useState(0);

  function amountChange(e) {
    setAmount(e.target.value);
  }
  function yearsChange(e) {
    setYears(e.target.value);
  }
  function rateChange(e) {
    setRate(e.target.value);
  }
  function calculateClick() {
    // Ensure the values are converted to numbers
    const principal = Number(amount);
    const monthlyRate = Number(rate) / (12 * 100); // Convert annual rate to monthly rate
    const totalMonths = Number(years) * 12; // Convert years to months
  
    // Ensure inputs are valid
    if (monthlyRate > 0 && totalMonths > 0) {
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
      setEmi(emi.toFixed(2)); // Set EMI with two decimal precision
    } else {
      setEmi(0); // Handle invalid inputs
    }
  }
  
  return (
    <div className="container-fluid">
      <h2>Personal Loan Calculator</h2>
      <div className="row mt-4 border border-dark border-2 p-4 m-3">
        <div className="col">
          Amount you need{" "}
          <input type="text" onChange={amountChange} value={amount} />
        </div>
        <div className="col">
          for
          <input
            type="text"
            size={4}
            value={years}
            onChange={yearsChange}
          />{" "}
          years
        </div>
        <div className="col">
          Interest Rate{" "}
          <input type="text" size={4} value={rate} onChange={rateChange} />%
        </div>
      </div>
      <div className="row mt-4 border border-dark border-2 p-4 m-3">
        <div className="col">
          &#8377; 50,000
          <input
            onChange={amountChange}
            type="range"
            name=""
            id=""
            min={"50000"}
            max={"100000"}
            value={amount}
          />
          &#8377; 10,00,000
        </div>

        <div className="col">
          1
          <input
            type="range"
            name=""
            id=""
            min={"1"}
            max={"5"}
            value={years}
            onChange={yearsChange}
          />
          5
        </div>
        <div className="col">
          10.25
          <input
            type="range"
            name=""
            id=""
            min={"10.25"}
            max={`18.25`}
            value={rate}
            onChange={rateChange}
            step={"0.1"}
          />
          18.25
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary" onClick={calculateClick}>
              Calculate
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1>Your monthly installment is &#8377; {emi} for Amount {amount} for {years} years at {rate}% interest rate</h1>
      </div>
    </div>
  );
};

export default EmiCalculatorComponent;

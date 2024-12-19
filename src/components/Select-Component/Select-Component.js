import React from 'react'

const SelectComponent = () => {
    const data = [
        { counter: "india", state: ["bihar", "delhi", "Andhra Pradesh ", "Assam"] },
        {
          counter: "usa",
          state: ["california", "delhi", "Andhra Pradesh ", "Assam"],
        },
        {
          counter: "uk",
          state: ["california", "delhi", "Andhra Pradesh ", "Assam"],
        },
      ];
  return (
    <div>
    <h3>Select counter</h3>
    <select>
      {data.map((item) => (
        <optgroup label={item.counter} key={item.counter}>
          {item.state.map((stateItem) => (
            <option key={stateItem}>{stateItem}</option>
          ))}
        </optgroup>
      ))}
    </select>
  </div>
  )
}

export default SelectComponent
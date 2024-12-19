import React from "react";

function TableComponent(props) {
  return (
    <div className="container-fluid">
      <table className="table table-hover caption-top">
        <caption>User Table</caption>
        <thead>
        <tr>
            {props.field.map((field, index) => (
              <th key={index}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.id}>
              {Object.keys(item).map((key) => (
                <td key={item[key]}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;

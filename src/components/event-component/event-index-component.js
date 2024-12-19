import React, { useState } from "react";

const EventIndexComponent = () => {
  const [isProduct, setIsProduct] = useState([
    { id: "01", name: "tv", price: "999" },
    { id: "02", name: "phone", price: "9999" },
    { id: "03", name: "laptop", price: "99999" },
  ]);

  function handleDelete(e) {
    console.log(e);
  }
  return (
    <div>
      <h1>Event Index Component</h1>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {isProduct.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={()=>handleDelete(item.id)}
                >
                  delete
                </button>
                <button className="btn btn-danger ms-2">Edit</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventIndexComponent;

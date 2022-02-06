import "./App.css";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("Initial");

  const get_data = () => {
    axios
      .get("http://127.0.0.1:5000/v1/how_are_you")
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: "6em" }}>{value}</h1>
      <button
        onClick={() => {
          get_data();
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;

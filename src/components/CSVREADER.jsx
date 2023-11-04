import React, { useState } from "react";
import { data } from "./data";
import "./data.css";

const CSVREADER = () => {
  const [data1, setData1] = useState({});
  const [number, setNumber] = useState(Math.floor(Math.random() * 50));
  let dataLemght = [];
  let dataLemght2 = [];

  return (
    <>
      <div className="h1">50-50</div>
      <div className="table">
        <div className="container">
          {data.map((item, i) => {
            if (item.first > 49) {
              dataLemght.push(item.first);
            } else {
              dataLemght2.push(item.first);
            }
            return (
              <span className="span" key={i}>
                <h5
                  style={
                    item.first > 49 ? { color: "red" } : { color: "black" }
                  }
                >
                  {item.date},
                </h5>
                <h5
                  style={
                    item.first > 49 ? { color: "red" } : { color: "black" }
                  }
                >
                  {item.first}
                </h5>
              </span>
            );
          })}
          {console.log(dataLemght.length)}
          {console.log(dataLemght2.length)}
        </div>
      </div>

      <h1>There are {dataLemght.length} number below 49 and</h1>
      <h1>There are {dataLemght2.length} number abavobe 49 and</h1>
      <div>
        {console.log(dataLemght[0])}
        <div
          className="div"
          onClick={() => setNumber(Math.floor(Math.random() * 50))}
        >
          {dataLemght[number]}
        </div>
      </div>
    </>
  );
};

export default CSVREADER;

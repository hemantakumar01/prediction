import React, { useState, useEffect } from "react";
import { data } from "./data";
import "./data.css";
import Results from "./Results";
import axios from "axios";
import Navbar from "./Navbar";

const CSVREADER = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [number, setNumber] = useState(Math.floor(Math.random() * 50));
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 50));
  useEffect(() => {
    sendMail();
  }, []);

  let dataLemght = [];
  let dataLemght2 = [];
  console.log(data1);
  console.log(data2);
  const pushData = async () => {
    try {
      let sampleData = { name: "Hemant" };
      const { res } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/pushData`,
        {
          data: data,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const pushArray = async () => {
    try {
      let sampleData = { name: "Hemant" };
      const { res } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/pushData`,
        {
          data: data,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createRandom = (data, lenght) => {
    // Use a for loop to generate JSX elements

    let itemsList = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * lenght);
      itemsList.push({ data: data[num] });
    }
    setData1(itemsList);
  };
  const createRandom2 = (data, lenght) => {
    // Use a for loop to generate JSX elements
    let itemsList = [];
    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * lenght);
      itemsList.push({ data: data[num] });
    }
    setData2(itemsList);
  };
  const pushDataToDb = async () => {
    try {
      const { data } = axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/results`,
        { number: data1, number2: data2 }
      );
    } catch (error) {
      console.log(error);
    }
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Function to execute daily >>>>>>>>>>>>>>>>>>>>>>
  const sendMail = async () => {
    try {
      console.log("Email Send");
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/sendMail`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const updatePlay = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/updatePlayToTrue/654cfae9740403b12dc160f1`,
        { round1: true, round2: true, id: "654cfae9740403b12dc160f1" }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />(<div className="h1">{data2.length > 0 && "00-49"}</div>
      <div className="table">
        {data2.length > 0 && <Results results={data2} color={"red"} />})
        <div className="h2">{data1.length > 0 && "50-99"}</div>
        {data1.length > 0 && <Results results={data1} />}
        <div className="container">
          {data.map((item, i) => {
            if (item.first > 49) {
              dataLemght.push(item.first);
            } else {
              dataLemght2.push(item.first);
            }
            // return (
            //   <span className="span" key={i}>
            //     <h5
            //       style={
            //         item.first > 49 ? { color: "red" } : { color: "black" }
            //       }
            //     >
            //       {item.date},
            //     </h5>
            //     <h5
            //       style={
            //         item.first > 49 ? { color: "red" } : { color: "black" }
            //       }
            //     >
            //       {item.first}
            //     </h5>
            //   </span>
            // );
          })}
        </div>
      </div>
      <div>
        <div
          className="div"
          onClick={() =>
            setNumber(Math.floor(Math.random() * dataLemght.length))
          }
        >
          {dataLemght[number]}
        </div>
        <div
          className="div4"
          onClick={() => {
            setNumber2(Math.floor(Math.random() * dataLemght2.length));
            pushData();
          }}
        >
          {dataLemght2[number2]}
        </div>
        <div
          className="div2"
          onClick={() => {
            updatePlay();
            createRandom2(dataLemght2, dataLemght2.length);
          }}
        >
          Generate 00-49
          <span>Length-{dataLemght.length}</span>
        </div>
        <div
          className="div3"
          onClick={() => {
            createRandom(dataLemght, dataLemght.length);
            pushArray();
          }}
        >
          Generate 50-99
          <span>Length-{dataLemght2.length}</span>
        </div>
        {data1.length > 0 && data2.length > 0 && (
          <div
            className="div6"
            onClick={() => {
              pushDataToDb();
            }}
          >
            Generate
            <span>Length-{dataLemght2.length}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CSVREADER;

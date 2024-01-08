import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import Looder from "./looder";
import moment from "moment";
import "./prec.css";

const Previous = () => {
  const [data, setData] = useState([]);
  const [toastResults, setToastResults] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/pushData`
      );
      setData(data.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const isoDateStringArray = data.map((item) => {
    // Parse the date in the given format
    const parsedDate = moment(item.date, "DD-MM-YYYY");

    // Format the date as an ISO string
    const isoString = parsedDate.toISOString();

    // Create a new object with the ISO string and other properties
    return {
      date: isoString,
      first: item.first,
      second: item.second,
    };
  });
  const sortedData = isoDateStringArray.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const Head = [];
  const Tell = [];
  sortedData.map((item) => {
    if (item.first < 50) {
      Head.push(Number(item.first));
    } else {
      Tell.push(Number(item.first));
    }
  });
  let toss;
  let HeadPercentage;
  let TellPercentage;
  if (Head.length > 0 || Tell.length > 0) {
    toss = Head.length / Tell.length;

    HeadPercentage = toss * 100;
    TellPercentage = 100 - HeadPercentage;
  }

  return (
    <div className="flex gap-2 flex-col">
      <Navbar />
      {sortedData.length > 0 && (
        <div className="text-center  font-bold flex flex-col gap-2 items-start">
          <span>H- {HeadPercentage?.toFixed(2)}%</span>
          <span>T- {TellPercentage?.toFixed(2)}%</span>
          <span
            className={`coin ${
              HeadPercentage > TellPercentage ? "bg-black" : "bg-red-500"
            } text-white w-12 h-12 p-1 flex justify-center items-center rounded-[50%]`}
          >
            {HeadPercentage > TellPercentage ? "H" : "T"}
          </span>
        </div>
      )}
      {sortedData.length > 0 ? (
        sortedData.map((item, i) => (
          <div
            key={i}
            className={`flex items-end justify-around p-2 bg-gray-200 rounded-md ${
              item.first < 50 && "text-red-500"
            }`}
          >
            <span>{moment(item.date).format("DD-MM-YYYY")}</span>
            <span>{item.first}</span>
          </div>
        ))
      ) : (
        <Looder />
      )}
    </div>
  );
};

export default Previous;

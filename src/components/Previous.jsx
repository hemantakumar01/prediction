import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import Looder from "./looder";
import moment from "moment";

const Previous = () => {
  const [data, setData] = useState([]);
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

  return (
    <div className="flex gap-2 flex-col">
      <Navbar />
      <h1 className="text-center text-[22px] font-bold">First Round</h1>
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

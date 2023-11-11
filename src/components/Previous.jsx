import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { data } from "./data";
import { useState } from "react";
import Looder from "./looder";

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
  return (
    <div className="flex gap-2 flex-col">
      <Navbar />
      <h1 className="text-center text-[22px] font-bold">First Round</h1>
      {data.length > 0 ? (
        data.map((item, i) => (
          <div
            key={i}
            className={`flex items-end justify-around p-2 bg-gray-200 rounded-md ${
              item.first < 50 && "text-red-500"
            }`}
          >
            <span>{item.date}</span>
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

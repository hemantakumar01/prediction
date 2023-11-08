import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const PredictionList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    preDataFunc();
  }, []);
  const preDataFunc = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/results`
      );
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      {data.length > 0 && (
        <div className={`w-full h-full flex  p-5 flex-col gap-2 `}>
          {data.map((item, i) => {
            return (
              <div
                key={item._id}
                className=" w-full h-full flex items-center  gap-3 bg-gray-300 p-3 rounded-sm cursor-pointer"
                onClick={() => {
                  navigate(`/results/${item._id}`);
                }}
              >
                <span className=" w-[100px] bg-purple-600 p-2 text-[10px] text-white rounded-md">
                  {moment(item.createdAt).format("DD-MM-YYYY")}
                </span>
                <div className="flex flex-col">
                  <span className="text-[16px] font-bold">
                    Round-1:{" "}
                    <span className="text-[12px] font-bold">
                      {item.firstRound.data1.map((item) => {
                        return item.results.map((item) => {
                          return (
                            <span className={`${item.hit && "text-red-600"} `}>
                              {item.number},{" "}
                            </span>
                          );
                        });
                      })}
                    </span>
                  </span>
                  <span className="text-[16px] font-bold">
                    Round-2:{" "}
                    <span className="text-[12px] font-bold">
                      {item.firstRound.data1.map((item) => {
                        return item.results.map((item) => {
                          console.log(item.hit);
                          return (
                            <span className={`${item.hit && "text-red-600"} `}>
                              {item.number},{" "}
                            </span>
                          );
                        });
                      })}
                    </span>
                  </span>
                </div>
                <span className="bg-green-600 p-2 text-white text-[12px] rounded-md">
                  UPDATE
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PredictionList;

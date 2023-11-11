import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { AiFillPlayCircle, AiFillCloseCircle } from "react-icons/ai";
import PushRawArray from "./PushRawArray";
import SendMaildaily from "./SendMaildaily";
import Looder from "./looder";
const PredictionList = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [showSend, setShowSend] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    preDataFunc();
  }, [load, showSend]);
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
  const handlePlay1 = async () => {
    try {
      console.log("Clickrd");
    } catch (error) {
      console.log(error);
    }
  };
  const updatePlaytoTrue = async (value, id) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/updatePlayToTrue/${id}`,
        { round1: value }
      );
      setLoad(!load);
    } catch (error) {
      console.log(error);
    }
  };
  const updatePlaytoTrue2 = async (value, id) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/updatePlayToTrue2/${id}`,
        { round2: value }
      );
      setLoad(!load);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SendMaildaily setShowSend={setShowSend} showSend={showSend} />
      <PushRawArray />
      {data.length > 0 ? (
        <div className={`w-full h-full flex  p-5 flex-col gap-2 `}>
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className=" w-full h-full flex items-center  gap-3 bg-gray-300 p-3 rounded-sm cursor-pointer"
              >
                <span className=" w-[100px] bg-purple-600 p-2 text-[10px] text-white rounded-md">
                  {moment(item.createdAt).format("DD-MM-YYYY")}
                </span>
                <div
                  className="flex flex-col"
                  onClick={() => {
                    navigate(`/results/${item._id}`);
                  }}
                >
                  <span className="text-[16px] font-bold">
                    Round-1:{" "}
                    <span className="text-[12px] font-bold">
                      {item.firstRound.data1.map((item) => {
                        return item.results.map((item, i) => {
                          return (
                            <span
                              className={`${item?.play && "text-blue-600"}  `}
                              style={{ color: `${item.hit && "red"}` }}
                              key={i}
                            >
                              {item.number},{" "}
                            </span>
                          );
                        });
                      })}
                    </span>
                  </span>
                  <span className="text-[16px] font-bold">
                    <hr className="h-[1px] text-black" />
                    Round-2:{" "}
                    <span className="text-[12px] font-bold">
                      {item.firstRound.data2.map((item) => {
                        return item.results.map((item, i) => {
                          return (
                            <span
                              className={`${item?.play && "text-blue-600"}  `}
                              style={{ color: `${item.hit && "red"}` }}
                              key={i}
                            >
                              {item.number},{" "}
                            </span>
                          );
                        });
                      })}
                    </span>
                  </span>
                </div>
                <div className="text-green-600 p-2 text-[12px] rounded-md flex flex-col items-center justify-between gap-3">
                  <div className="round1 flex text-[30px]">
                    <span
                      onClick={() => {
                        updatePlaytoTrue(true, item._id);
                      }}
                    >
                      <AiFillPlayCircle />
                    </span>
                    <span
                      onClick={() => {
                        updatePlaytoTrue(false, item._id);
                      }}
                    >
                      <AiFillCloseCircle />
                    </span>
                    <span></span>
                  </div>
                  <div className="round2 flex text-[30px]">
                    <span
                      onClick={() => {
                        updatePlaytoTrue2(true, item._id);
                      }}
                    >
                      <AiFillPlayCircle />
                    </span>
                    <span
                      onClick={() => {
                        updatePlaytoTrue2(false, item._id);
                      }}
                    >
                      <AiFillCloseCircle />
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Looder />
      )}
    </>
  );
};

export default PredictionList;

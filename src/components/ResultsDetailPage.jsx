import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import Looder from "./looder";

const ResultsDetailPage = () => {
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  const params = useParams();

  useEffect(() => {
    preDataFunc();
  }, [reload]);
  const handleCheckbox = async (item, id, di, ri) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/updateHit/${params.id}/${di}/${ri}`,
        { hit: item.target.checked }
      );
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };
  const preDataFunc = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/results/single`,
        { id: params.id }
      );
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mainDiv w-full h-full">
        <h4 className="text-center text-[25px] font-bold my-5 ">
          Here is predicted results on{" "}
          {data && moment(data?.createdAt).format("DD-MM-YYYY")}
        </h4>

        <div className="main w-full h-full flex justify-around">
          <div className="">
            <h1 className="text-[20px] font-bold my-2 text-center">
              First Round
            </h1>

            {data.firstRound ? (
              <div className="firstround1 flex  items-center justify-center">
                <div className="flex  gap-10   ">
                  <div className="flex flex-col ">
                    {data?.firstRound?.data1?.map((item, di) => {
                      return item.results.map((item, ri) => {
                        return (
                          <>
                            <div
                              className="flex gap-2 justify-between"
                              key={(ri, di)}
                            >
                              <span
                                className={`${item.hit && "text-red-600"} `}
                              >
                                {item.number}
                              </span>
                              <input
                                type="checkbox"
                                name="hit"
                                onChange={(e) => {
                                  handleCheckbox(e, item._id, di, ri);
                                }}
                              />
                            </div>
                          </>
                        );
                      });
                    })}
                  </div>
                  <div className="flex flex-col ">
                    {data?.firstRound?.data2?.map((item, di) => {
                      return item.results.map((item, ri) => {
                        return (
                          <>
                            <div
                              className="flex gap-2 justify-between"
                              key={(ri, di)}
                            >
                              <span
                                className={`${item.hit && "text-red-600"} `}
                              >
                                {item.number}
                              </span>
                              <input
                                type="checkbox"
                                name="hit"
                                onChange={(e) => {
                                  handleCheckbox(e, item._id, di, ri);
                                }}
                              />
                            </div>
                          </>
                        );
                      });
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Looder />
            )}
          </div>

          {/* second round */}
        </div>
      </div>
    </>
  );
};

export default ResultsDetailPage;

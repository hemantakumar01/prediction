import React, { useState } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const PushRawArray = () => {
  const [date, setDate] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    try {
      console.log(e.preventDefault());
      e.preventDefault();
      const data = {
        date,
        first,
        second,
      };
      const { res } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/pushData`,
        { data }
      );

      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div
        className="text-[20px] flex items-end justify-end mx-5 text-left"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <span>
            <AiFillCloseCircle />
          </span>
        ) : (
          <span>
            <GiHamburgerMenu />
          </span>
        )}
      </div>
      {show && (
        <>
          <div className="">
            {show && (
              <form action="" className="flex flex-col gap-2">
                <input
                  type="text"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  className="border-[2px] border-gray-400 p-2 rounded-sm"
                  required
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <input
                  type="number"
                  name="first"
                  placeholder="First Round"
                  className="border-[2px] border-gray-400 p-2 rounded-sm"
                  required
                  value={first}
                  onChange={(i) => {
                    setFirst(i.target.value);
                  }}
                />
                <input
                  type="number"
                  name="second"
                  placeholder="Second Round"
                  className="border-[2px] border-gray-400 p-2 rounded-sm"
                  required
                  value={second}
                  onChange={(e) => {
                    setSecond(e.target.value);
                  }}
                />
                <button
                  className="bg-green-400 p-3 rounded-md text-white"
                  onClick={(e) => handleSubmit(e)}
                >
                  ADD RESULT
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PushRawArray;

import React from "react";
import { BsSendFill } from "react-icons/bs";

import axios from "axios";

const SendMaildaily = ({ showSend, setShowSend }) => {
  const handleSetShowSend = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/sendMailDaily`
      );
      setShowSend(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      {showSend && (
        <div
          onClick={handleSetShowSend}
          className=" text-[30px] mx-5  flex items-end justify-end mb-2"
        >
          {<BsSendFill />}
        </div>
      )}
    </div>
  );
};

export default SendMaildaily;

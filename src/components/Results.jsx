import React from "react";
import "./css/results.css";

const Results = ({ results, color, date }) => {
  return (
    <div className="results-con ">
      {date ? (
        <div className="results-con ">
          <span key={results}>{date}</span>
        </div>
      ) : (
        <div className="results-con ">
          {" "}
          {results.length > 0 &&
            results.map((item) => (
              <div key={item[0]} className={`results ${color && color}`}>
                <span className="results-num">{item.data}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Results;

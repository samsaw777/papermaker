import React from "react";

const Paper = ({ csvReader }) => {
  console.log(csvReader);
  return (
    <div className="border-2 broder-white rounded-lg shadow-lg p-10 w-11/12 mx-auto mt-10">
      <div className="font-bold w-full text-center">Question Paper</div>
      {csvReader.map((csv, key) => {
        return csv.Index && csv.Questions ? (
          <div className="flex space-x-5">
            <p className="font-bold text-lg w-[20px]">{key}</p>
            <p className="text-lg p-0 m-0">{csv.Questions}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Paper;

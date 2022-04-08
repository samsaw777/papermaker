import React from "react";

const Paper = ({ csvReader, setShowPaper, showPaper }) => {
  console.log(csvReader);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  return (
    <div>
      <div
        className="w-11/12 lg:w-6/12 mx-auto flex justify-end cursor-pointer"
        onClick={() => setShowPaper(!showPaper)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 hover:bg-gray-200 rounded-sm"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col border-2 broder-white rounded-lg shadow-lg p-10 w-11/12 lg:w-6/12 mx-auto mt-5">
        <div className="w-full font-normal text-xl text-center">
          B.E - (INFORMATION TECHNOLOGY)(SEM VI)
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-lg font-medium">{today}</p>
          <p className="text-lg font-bold">[Total Marks:80]</p>
        </div>
        <div className="flex flex-col space-y-2 mt-8 font-bold text-md">
          <p>1. All questions are compulsory.</p>
          <p>2. Assume suitable data if necessary.</p>
        </div>
        <div className="mt-10">
          {csvReader.map((csv, key) => {
            return csv.Index && csv.Questions ? (
              <div className="flex space-x-5">
                <p className="font-bold text-lg w-[20px]">{key}</p>
                <p className="text-lg p-0 m-0">{csv.Questions}</p>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Paper;

import React, { useState } from "react";
import Paper from "./Paper";

const CsvReader = () => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  const [randomArray, setRandomArray] = useState([]);

  const makeObject = (objectArr, delim, header) => {
    const newArray = objectArr.map((row) => {
      const values = row.split(delim);
      const eachObject = header.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    // console.log(newArray);
    setCsvArray([...newArray]);
  };

  const processCSV = (str, delim = ",") => {
    const header = str.slice(0, str.indexOf("\n")).split(delim);
    const replacedHeader = header.map((head) => {
      return head.replace(/[\r]/g, "");
    });
    console.log(replacedHeader);

    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    // console.log(rows);
    const replacedRows = rows.map((row) => {
      return row.replace(/[\r]/g, "");
    });
    const removedEmptyRows = replacedRows.filter((el) => {
      return el !== ",";
    });

    var newCSVArray = [];

    if (removedEmptyRows.length > 21) {
      while (newCSVArray.length < 21) {
        var randomArray = Math.floor(
          Math.random() * (removedEmptyRows.length - 1)
        );

        if (newCSVArray.indexOf(removedEmptyRows[randomArray]) === -1) {
          newCSVArray.push(removedEmptyRows[randomArray]);
        }
      }
      makeObject(newCSVArray, delim, replacedHeader);
    } else {
      makeObject(removedEmptyRows, delim, replacedHeader);
    }
    console.log(newCSVArray);
    console.log(randomArray);
  };

  console.log(csvArray);

  const submitFile = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      //   console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  console.log(csvArray);
  return (
    <div>
      <div className="flex items-center justify-center">
        <form
          id="cdv-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (csvFile) submitFile();
          }}
        >
          <input
            type="file"
            accept=".csv"
            id="csvFile"
            onChange={(e) => {
              setCsvFile(e.target.files[0]);
            }}
          />

          <button type="submit" className="px-5 py-3 rounded bg-green-500">
            Upload
          </button>
        </form>
      </div>
      {csvArray.length > 0 && <Paper csvReader={csvArray} />}
    </div>
  );
};

export default CsvReader;

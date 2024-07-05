import React, { useState } from "react";
import resultcontext from "./resultcontext";

const ResultState = (props) => {
  const r1 = [];
  const [result, setresult] = useState(r1);
  //fetching result//
  const getresult = async (s) => {
    const response = await fetch("http://localhost:5000/api/result/getresult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ sem:s.sem }),
    });
    
    let json =await response.json();
    console.log(json);
    setresult(json);
  };

  return (
    <resultcontext.Provider value={{ result, setresult, getresult }}>
      {props.children}
    </resultcontext.Provider>
  );
};

export default ResultState;

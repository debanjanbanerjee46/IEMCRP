import React, { useContext, useEffect,useState } from "react";
import resultcontext from "../context/resultcontext.js";
import { useNavigate } from "react-router-dom";
import Subitem from "./Subitem.js";

const Result = () => {
  const context = useContext(resultcontext);
  const { result, setresult, getresult } = context;
  const [credentials, setCredentials] = useState({sem:1})
  useEffect(() => {}, []);
  const change=(e)=>{
    setCredentials({...credentials, sem:e.target.value})
  };
  const onsubmit = ()=>{
      getresult(credentials);
  };
  return (
    <>
      <div className="result-block">
        <div className="select-result-block">
          <span className="result-label">Select Semester:</span>
          <select name="sem" value={credentials.value}onChange={change} id="sem-result">
            <option value= "1" >1st Semester</option>
            <option value= "2" >2nd Semester</option>
            <option value= "3" >3rd Semester</option>
            <option value= "4" >4th Semester</option>
            <option value= "5" >5th Semester</option>
            <option value= "6" >6th Semester</option>
            <option value= "7" >7th Semester</option>
            <option value= "8" >8th Semester</option>
          </select>
          <button onClick={onsubmit}>Show Result</button>
        </div>
        <div className="routine">
          <h3>Result</h3>
        </div>
      </div>
      <div className="wrapper">
        {result.map((res) => {
          return <Subitem key={res._id}  sub={res}/>
        })}
      </div>
    </>
  );
};

export default Result;

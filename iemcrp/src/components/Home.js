import React, { useContext, useEffect } from "react";

import usercontext from "../context/usercontext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const context = useContext(usercontext);
  const { user,setusers,getuser } = context;
  useEffect(() => {
    if (!(localStorage.getItem("token"))) {
      navigate("/login");
    } else {
      getuser();
      
    }
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="logo">
          <img src="/assets/Logo_iem.jpg" alt="asset" />
        </div>
        <div className="content-body">
          <div className="student-info">
            <p className="student-info-details">
              
              <span className="lebel">Name:</span>{user.name}
              
            </p>
            <p className="student-info-details">
              
              <span className="lebel">Father's/Guardian Name:</span>{user.parentsname}
              
            </p>
            <p className="student-info-details">
              
              <span className="lebel">Registation Number:</span>{user.mobileno}
            </p>
            <p className="student-info-details">
              
              <span className="lebel">Enrollment No:</span> {user.enrollmentNo}
            </p>
            <p className="student-info-details">
              
              <span className="lebel">Strem:</span>{user.stream}
            </p>
            <p className="student-info-details">
              
              <span className="lebel">Curent Semester:</span>{user.curentsem}
            </p>
          </div>
          <img src="/assets/user_icon.jpg" alt="" />
        </div>
        {/*
      <div classNameName="routine">
        <h3>classNameName routine</h3>
      </div>
      <div>
        <div className="wrapper">
            <div className="box a">col 1</div>
            <div className="box b">col 2</div>
            <div className="box c">col 3</div>
            <div className="box d">col 4</div>
            <div className="box f">col 5</div>
            <div className="box g">col 6</div>
            <div className="box h">col 7</div>
            <div className="box h">col 8</div>
            
            <div className="row">
              <div className="box i">short data</div>
              <div className="box j">piece of data</div>
              <div className="box k">short data</div>
              <div className="box l">short data</div>
              <div className="box m">short data</div>
            </div>
          
            
            <div className="row">
              <div className="box i">short data</div>
              <div className="box j">piece of data</div>
              <div className="box k">short data</div>
              <div className="box l">short data</div>
              <div className="box m">short data</div>
            </div>
            
            <div className="row">
              <div className="box i">short data</div>
              <div className="box j">piece of data</div>
              <div className="box k">short data</div>
              <div className="box l">short data</div>
              <div className="box m">short data</div>
            </div>
            
            <div className="row">
              <div className="box d">short data</div>
              <div className="box e">piece of data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
            </div>
            <div className="row">
              <div className="box d">short data</div>
              <div className="box e">piece of data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
            </div>
            
            <div className="row">
              <div className="box d">short data</div>
              <div className="box e">piece of data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
            </div>
            
            <div className="row">
              <div className="box d">short data</div>
              <div className="box e">piece of data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
              <div className="box f">short data</div>
            </div>
            
            <div className="row">
                <div className="box d">short data</div>
                <div className="box e">piece of data</div>
                <div className="box f">short data</div>
                <div className="box f">short data</div>
                <div className="box f">short data</div>
              </div>
          </div>
      </div>
  */}
      </section>
    </>
  );
};

export default Home;

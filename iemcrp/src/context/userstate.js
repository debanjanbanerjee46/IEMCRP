import React, { useState } from "react";
import usercontext from "./usercontext";

const UserState =  (props) => {
    const u1={};
    const [user, setusers] = useState(u1);
  const getuser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
   let json= await response.json();
    setusers(json);
   
    
  };

  

  return (
    <usercontext.Provider value={{ user, setusers,getuser }}>
      {props.children}
    </usercontext.Provider>
  );
};

export default UserState;

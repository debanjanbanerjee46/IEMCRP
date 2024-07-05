import React, { useState } from "react";
import paymentcontext from "./paymentcontext";

const PaymentState = (props) => {
  const p1 = [];
  const [payment,setpayments] = useState(p1);
  //geting payment//
  const getpayment = async () => {
    const response = await fetch(
      "http://localhost:5000/api/payment/getpayment",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    let json = await response.json();
    setpayments(json);
    
  };
  //making Payment//
  const makepayment = async (sem) => {
    
    
    const response = await fetch("http://localhost:5000/api/payment/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body:JSON.stringify(sem),
    });
    let json = await response.json();
    setpayments(json);
  };

  return (
    <paymentcontext.Provider value={{ payment, setpayments, getpayment, makepayment }} >
      
      
      {props.children}
    </paymentcontext.Provider>
  );
};

export default PaymentState;

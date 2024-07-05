import React, { useContext, useEffect } from "react";
import paymentcontext from "../context/paymentcontext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const context2 = useContext(paymentcontext);
  const { payment, setpayments, getpayment, makepayment } = context2;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getpayment();
    }
  }, []);
  const navigate = useNavigate();
  const onclick = (props) => {
    makepayment(props);
  };
  return (
    <div className="payment-block">
      <div className="sem-payment-table">
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">#</div>
          <div className="sem-payment-table-col semester">Semester</div>
          <div className="sem-payment-table-col">Action</div>
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">1</div>
          <div className="sem-payment-table-col semester">1st Semester</div>
          {!payment.sem1 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem1: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">2</div>
          <div className="sem-payment-table-col semester">2nd Semester</div>
          {!payment.sem2 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem2: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">3</div>
          <div className="sem-payment-table-col semester">3rd Semester</div>
          {!payment.sem3 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem3: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">4</div>
          <div className="sem-payment-table-col semester">4th Semester</div>
          {!payment.sem4 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem4: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">5</div>
          <div className="sem-payment-table-col semester">5th Semester</div>
          {!payment.sem5 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem5: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">6</div>
          <div className="sem-payment-table-col semester">6th Semester</div>
          {!payment.sem6 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem6: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">7</div>
          <div className="sem-payment-table-col semester">7th Semester</div>
          {!payment.sem7 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem7: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
        <div className="sem-payment-table-row">
          <div className="sem-payment-table-col">8</div>
          <div className="sem-payment-table-col semester">8th Semester</div>
          {!payment.sem8 ? (
            <div className="sem-payment-table-col">
              <button onClick={() => onclick({ sem8: true })}>Pay</button>
            </div>
          ) : (
            <div className="sem-payment-table-col">Paid</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;

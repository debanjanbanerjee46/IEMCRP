import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes as Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserState from "./context/userstate";
import Login2 from "./components/login2";
import Payment from "./components/Payment";
import PaymentState from "./context/paymentstate";
import Result from "./components/result";
import ResultState from "./context/resultstate";

function App() {
  return (
    <>
      <UserState>
        <PaymentState>
          <ResultState>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login2 />} />
                <Route path="/payment" element={<Payment />} />

                <Route path="/result" element={<Result />} />
              </Switch>
            </Router>
          </ResultState>
        </PaymentState>
      </UserState>
    </>
  );
}

export default App;

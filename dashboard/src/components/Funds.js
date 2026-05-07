import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState(0);
  const [usedMargin, setUsedMargin] = useState(0);
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(""); // "add" or "withdraw"

  // Fetch funds + margin
  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await axios.get("http://localhost:3002/funds", {withCredentials: true});
        setFunds(res.data.fund.balance);
        setUsedMargin(res.data.fund.usedMargin || 0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFunds();
  }, []);

  // Add funds
  const handleAddFunds = async () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/funds/addfunds", {
        amount: Number(amount),
      }, {withCredentials: true});

      setFunds(res.data.fund.balance);
      setUsedMargin(res.data.fund.usedMargin || 0);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  // Withdraw funds
  const handleWithdraw = async () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/funds/withdraw", {
        amount: Number(amount),
      }, {withCredentials: true});

      setFunds(res.data.fund.balance);
      setUsedMargin(res.data.fund.usedMargin || 0);
      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const closeModal = () => {
    setAmount("");
    setShowModal(false);
    setAction("");
  };

    // Calculations
 // Calculations
const availableCash = funds - usedMargin;
const availableMargin = funds - usedMargin; // simplified (no leverage)
  return (
    <>
    {/* top section */}
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
         <button
          className="btn btn-green"
          onClick={() => {
            setAction("add");
            setShowModal(true);
          }}
        >
          Add funds
        </button>
        
          <button
          className="btn btn-blue"
          onClick={() => {
            setAction("withdraw");
            setShowModal(true);
          }}
        >
          Withdraw
        </button>
      
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

         <div className="table">
        <div className="data">
          <p>Used margin</p>
          <p className="imp">₹ {usedMargin}</p>
        </div>

        <div className="data">
          <p>Available cash</p>
          <p className="imp colored">₹ {availableCash}</p>
        </div>

        <hr />

        <div className="data">
          <p>Total balance</p>
          <p>₹ {funds}</p>
        </div>
      </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>

       {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h2>{action === "add" ? "Add Funds" : "Withdraw Funds"}</h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className={action === "add" ? "add-btn" : "withdraw-btn"}
              onClick={action === "add" ? handleAddFunds : handleWithdraw}
            >
              {action === "add" ? "Add Funds" : "Withdraw"}
            </button>

            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;

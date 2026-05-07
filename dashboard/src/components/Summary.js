import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = ({ user }) => {
  const [funds, setFunds] = useState(0);
  const [usedMargin, setUsedMargin] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch funds
        const fundsRes = await axios.get(
          "http://localhost:3002/funds",
          { withCredentials: true }
        );

        setFunds(fundsRes.data?.fund?.balance || 0);
        setUsedMargin(fundsRes.data?.fund?.usedMargin || 0);

        // Fetch holdings
        const holdingsRes = await axios.get(
          "http://localhost:3002/holdings/allHoldings",
          { withCredentials: true }
        );

        setHoldings(holdingsRes.data || []);

      } catch (err) {
        console.log("Error:", err);

        setFunds(0);
        setUsedMargin(0);
        setHoldings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Calculations
  const totalBalance = funds;
  const availableCash = Math.max(0, funds - usedMargin);

  const totalInvestment = holdings.reduce(
    (acc, stock) =>
      acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );

  return (
    <>
      {/* Username */}
      <div className="username">
        <h6>Hi, {user?.username || "User"}</h6>
        <hr className="divider" />
      </div>

      {/* Equity Section */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹ {availableCash.toFixed(2)}</h3>
            <p>Available Cash</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Used Margin
              <span> ₹ {usedMargin.toFixed(2)}</span>
            </p>

            <p>
              Total Balance
              <span> ₹ {totalBalance.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Holdings Section */}
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹ {totalInvestment.toFixed(2)}</h3>
            <p>Total Investment</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Stocks Owned
              <span> {holdings.length}</span>
            </p>

            <p>
              Total Quantity
              <span>
                {" "}
                {holdings.reduce(
                  (acc, stock) => acc + (stock.qty || 0),
                  0
                )}
              </span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
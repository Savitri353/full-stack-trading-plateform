import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/holdings/allHoldings", { withCredentials: true })
      .then((res) => {
        // Validation: Ensure res.data is an array before setting state
        setAllHoldings(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setAllHoldings([]); // Set empty array on error to prevent crashes
        setLoading(false);
      });
  }, []);

  // Use Optional Chaining (?.) and default values to prevent map errors
  const labels = allHoldings?.map((stock) => stock.name || "Unknown") || [];

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings?.map((stock) => stock.price || 0) || [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (loading) return <div className="loader">Loading Holdings...</div>;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {allHoldings.length === 0 ? (
        <div className="empty-state" style={{ textAlign: "center", padding: "20px" }}>
          <p>You don't have any holdings yet. Start investing to see them here!</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stock, index) => {
                // Safeguard: Provide default values (0) if fields are missing
                const qty = stock.qty || 0;
                const price = stock.price || 0;
                const avg = stock.avg || 0;

                const curValue = price * qty;
                const pnl = curValue - avg * qty;
                const isProfit = pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = (stock.day || 0) < 0 ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{qty}</td>
                    <td>{avg.toFixed(2)}</td>
                    <td>{price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>{pnl.toFixed(2)}</td>
                    <td className={profClass}>{stock.net || "0.00"}</td>
                    <td className={dayClass}>{stock.day || "0.00"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Only show the summary and graph if there is data */}
      {allHoldings.length > 0 && (
        <>
          <div className="row">
            {/* You should calculate these totals dynamically based on allHoldings */}
            <div className="col">
              <h5>29,875.55</h5>
              <p>Total investment</p>
            </div>
            {/* ... other stats ... */}
          </div>
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;
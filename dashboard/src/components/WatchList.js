import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray)=>subArray["name"]);
const WatchList = () => {
  const data = {
  labels,
  datasets: [
    {
      label: "Price",
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchlistItem stock={stock} key={index} />
        ))}
      </ul>
        <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent"> {stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardControlKeyIcon />
          )}
          <span className="price"> {stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          onClick={handleBuyClick}
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" placement="top">
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          onClick={handleSellClick}
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" placement="top">
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="button">
            <BarChartIcon />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="button" placement="top">
            <MoreHorizIcon />
          </button>
        </Tooltip>
      </span>
     
    </span>

   
  );
};

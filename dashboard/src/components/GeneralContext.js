import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

// Step 1: Create the context with default (dummy) functions
const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {}

});

// Step 2: Create the provider component
export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
 

  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
  
  const openSellWindow = (uid) => {
      setIsSellWindowOpen(true);
      setSelectedStockUID(uid);
  }

  const closeSellWindow = ()=> {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
  }
  return(
    <GeneralContext.Provider 
    value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow
    }}>
        {children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
        {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;


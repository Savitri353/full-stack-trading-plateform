import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
      console.log("Home mounted"); // ADD THIS
    axios
      .get("http://localhost:3002/auth/verify", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("User verified");
        
        setIsAuth(true);
        setUser(res.data.user); 
      })
      .catch((err) => {
        console.log("Verify error:", err.response);
        setIsAuth(false);
      });
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  if (isAuth === false) {
    window.location.href = "http://localhost:3000/login";
    return null;
  }
  return (
    <>
      <TopBar user={user}/>
      <Dashboard user={user} />
    </>
  );
};

export default Home;

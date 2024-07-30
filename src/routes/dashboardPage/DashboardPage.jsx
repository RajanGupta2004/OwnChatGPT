import { useAuth } from "@clerk/clerk-react";
import "./dashboardPage.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const DashboardPage = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  console.log(userId, isLoaded);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [userId, navigate, isLoaded]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="dashBoardContainer">
      <div className="dashboardtexts">
        <div className="dashBoardTitle">
          <img src="/logo.png" alt="logo" />
          <h4>HELLO RAJAN</h4>
        </div>
        <div className="cards">
          <div className="cardItems">
            <img className="dashboardImage" src="/chat.png" alt="img" />
            <h3>Help me with code</h3>
          </div>
          <div className="cardItems">
            <img className="dashboardImage" src="/image.png" alt="img" />
            <h3>Help me with code</h3>
          </div>
          <div className="cardItems">
            <img className="dashboardImage" src="/code.png" alt="img" />
            <h3>Help me with code</h3>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Ask me anythings" />
          <button>
            <img src="/arrow.png" alt="image" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;

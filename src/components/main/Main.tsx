import React from "react";
import "../../styles/main.css";
import Aside from "../aside/Aside";
const Main: React.FC = () => {
  return (
    <main className="twitter-main">
      <div className="tweets"></div>
      <Aside />
    </main>
  );
};

export default Main;

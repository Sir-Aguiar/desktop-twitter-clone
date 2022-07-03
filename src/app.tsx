import React from "react";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <Main />
      <Aside />
    </div>
  );
};

export default App;

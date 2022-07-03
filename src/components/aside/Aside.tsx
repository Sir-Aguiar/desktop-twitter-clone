import React from "react";
import "../../styles/aside.css";
import { Search } from "../icons/Icons";

const Aside: React.FC = () => {
  return (
    <aside className="main-aside">
      <div className="search-bar">
        <Search />
        <input type="text" placeholder="Buscar no Twitter" />
      </div>
      <div className="about-now">
        
      </div>
    </aside>
  );
};

export default Aside;

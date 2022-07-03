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
        <h1 className="py-2 px-5 font-bold text-xl">O que está acontecendo</h1>
        <div className="trading-topic">
          <div className="topic ">Tecnologia - Assuntos do momento</div>
          <div className="title">#VITEISAMAZING</div>
          <div className="count">33.3 mil Tweets</div>
        </div>
        <div className="trading-topic">
          <div className="topic">Tecnologia - Assuntos do momento</div>
          <div className="title">#ELONSTWITTER</div>
          <div className="count">13.9 mil Tweets</div>
        </div>
        <div className="trading-topic">
          <div className="topic">Tecnologia - Assuntos do momento</div>
          <div className="title">#FREECOFFEE</div>
          <div className="count">23.5 mil Tweets</div>
        </div>
        <div className="show-more">
          <a href="">Mostrar mais</a>
        </div>
      </div>
      <div className="new-connections">
        <div className="connection">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">Username</span>
            <span className="brightness-75 font-thin">@usertag</span>
          </div>
          <button className="follow">Seguir</button>
        </div>
        <div className="connection">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">Username</span>
            <span className="brightness-75 font-thin">@usertag</span>
          </div>
          <button className="follow">Seguir</button>
        </div>
        <div className="connection">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <div className="flex flex-col text-slate-200">
            <span className="font-bold">Username</span>
            <span className="brightness-75 font-thin">@usertag</span>
          </div>
          <button className="follow">Seguir</button>
        </div>
        <div className="show-more">
          <a href="">Mostrar mais</a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

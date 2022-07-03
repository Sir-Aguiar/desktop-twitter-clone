import React from "react";
import "../../styles/header.css";
import {
  Explore,
  ProfileMore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
  Saved,
  Twitter,
} from "../icons/Icons";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <ul className="twitter-sections ">
          <li className="twitter-section twitter-icon">
            <Twitter />
          </li>
          <li className="twitter-section">
            <Home />
            Página Inicial
          </li>
          <li className="twitter-section">
            <Explore />
            Explorar
          </li>
          <li className="twitter-section">
            <Notifications />
            Notificações
          </li>
          <li className="twitter-section">
            <Messages />
            Mensagens
          </li>
          <li className="twitter-section">
            <Saved />
            Itens salvos
          </li>
          <li className="twitter-section">
            <Lists />
            Listas
          </li>
          <li className="twitter-section">
            <Profile />
            Perfil
          </li>
          <li className="twitter-section">
            <More />
            Mais
          </li>
        </ul>
        <button className="tweet-button">Tweetar</button>
        <div className="profile-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <div className="flex flex-col text-slate-200">
            <span>Username</span>
            <span className="brightness-75 font-thin">@usertag</span>
          </div>
          <ProfileMore />
        </div>
      </div>
    </header>
  );
};

export default Header;

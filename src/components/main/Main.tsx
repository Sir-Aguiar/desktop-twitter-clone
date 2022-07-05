import React from "react";
import "../../styles/main.css";
import Aside from "../aside/Aside";
import { Calendar, Emoji, Enquete, GIF, Location, Media } from "../icons/Icons";
const Main: React.FC = () => {
  return (
    <main className="twitter-main">
      <div className="tweets">
        <div className="whatsup">
          <div className="whatsup-area">
            <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <textarea className="whatsup-tweet" placeholder="O que está acontecendo?"></textarea>
          </div>
          <footer className="whatsup-footer">
            <div className="icons">
              <Media /> <GIF /> <Enquete /> <Emoji /> <Calendar /> <Location />
            </div>
            <button disabled className="sm-tweet-button">Tweetar</button>
          </footer>
        </div>
        <div className="user-tweet">
          <div className="tweet-header"></div>
          <div className="tweet-body"></div>
          <div className="tweet-footer"></div>
        </div>
      </div>
      <Aside />
    </main>
  );
};

export default Main;

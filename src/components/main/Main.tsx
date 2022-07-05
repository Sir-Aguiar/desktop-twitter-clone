import React from "react";
import "../../styles/main.css";
import Aside from "../aside/Aside";
import { Calendar, Coment, Emoji, Enquete, GIF, Like, Location, Media, Retweet, Upload } from "../icons/Icons";
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
            <button disabled className="sm-tweet-button">
              Tweetar
            </button>
          </footer>
        </div>
        <div className="user-tweet">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="tweet-author" />
          <div className="tweet-body">
            <div className="tweet-header">
              <span className="text-slate-200 font-bold">Username</span>
              <span>@usertag</span>
              <span>1 h</span>
            </div>
            <div className="tweet-content">
              <p className="tweet">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam voluptatem nostrum atque vel!
                Quasi ad optio velit obcaecati veniam odio aliquid sunt blanditiis, minus facilis dignissimos
                repudiandae saepe sed!
              </p>
              <div className="tweet-icons">
                <span className="coment">
                  <Coment />0
                </span>{" "}
                <span className="retweet">
                  <Retweet />0
                </span >{" "}
                <span className="like">
                  <Like />0
                </span>{" "}
                <Upload />
              </div>
            </div>
          </div>
        </div>
        <div className="user-tweet">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="tweet-author" />
          <div className="tweet-body">
            <div className="tweet-header">
              <span className="text-slate-200 font-bold">Username</span>
              <span>@usertag</span>
              <span>1 h</span>
            </div>
            <div className="tweet-content">
              <p className="tweet">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam voluptatem nostrum atque vel!
                Quasi ad optio velit obcaecati veniam odio aliquid sunt blanditiis, minus facilis dignissimos
                repudiandae saepe sed!
              </p>
              <div className="tweet-icons">
                <span className="coment">
                  <Coment />0
                </span>{" "}
                <span className="retweet">
                  <Retweet />0
                </span >{" "}
                <span className="like">
                  <Like />0
                </span>{" "}
                <Upload />
              </div>
            </div>
          </div>
        </div>
        <div className="user-tweet">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="tweet-author" />
          <div className="tweet-body">
            <div className="tweet-header">
              <span className="text-slate-200 font-bold">Username</span>
              <span>@usertag</span>
              <span>1 h</span>
            </div>
            <div className="tweet-content">
              <p className="tweet">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam voluptatem nostrum atque vel!
                Quasi ad optio velit obcaecati veniam odio aliquid sunt blanditiis, minus facilis dignissimos
                repudiandae saepe sed!
              </p>
              <div className="tweet-icons">
                <span className="coment">
                  <Coment />0
                </span>{" "}
                <span className="retweet">
                  <Retweet />0
                </span >{" "}
                <span className="like">
                  <Like />0
                </span>{" "}
                <Upload />
              </div>
            </div>
          </div>
        </div>
        <div className="user-tweet">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="tweet-author" />
          <div className="tweet-body">
            <div className="tweet-header">
              <span className="text-slate-200 font-bold">Username</span>
              <span>@usertag</span>
              <span>1 h</span>
            </div>
            <div className="tweet-content">
              <p className="tweet">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum numquam voluptatem nostrum atque vel!
                Quasi ad optio velit obcaecati veniam odio aliquid sunt blanditiis, minus facilis dignissimos
                repudiandae saepe sed!
              </p>
              <div className="tweet-icons">
                <span className="coment">
                  <Coment />0
                </span>{" "}
                <span className="retweet">
                  <Retweet />0
                </span >{" "}
                <span className="like">
                  <Like />0
                </span>{" "}
                <Upload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aside />
    </main>
  );
};

export default Main;

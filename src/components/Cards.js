import React from 'react';
import { Link } from "react-router-dom";

import banner from "../img/0.jfif";
import profile from "../img/profilepic.jfif";
import business from "../img/tuj-logo.png";
import lambda from "../img/lambda.png";

const Cards = ({language}) => {
  return (
    <div id="container">
      <img src={banner} alt="Banner of Yokohama"></img>
      <div>
        <div className="flexbox">
          <div className="photo"></div>
        </div>
        <div id="img-cont">
          <img src={profile} alt="Profile"></img>
        </div>
        {language === "English" ? (
          <>
          <div id="info-cont">
            <div id="information-left">
              <h2>Jesse Goodburne</h2>
              <h3>Web Developer</h3>
              <ul>
                <li>Laurel, MD</li>
                <li>500+ connections</li>
                <li><Link className="contact-link" to="/contact">Contact info</Link></li>
              </ul>
            </div>
            <div id="information-right">
              <img src={business} alt=""/><span>Temple University</span><br />
              <img src={lambda} alt=""/><span>Lambda School</span>
            </div>
          </div>
          </>
        ) : (
          <>
            <div id="info-cont">
            <div id="information-left">
              <h2>グッドバーンジェシー</h2>
              <h3>フルスタックウェブ開発</h3>
              <ul>
                <li>ローラル、メリーランド州</li>
                <li>500人以上のコネクション</li>
                <li><Link className="contact-link" to="/contact">連絡</Link></li>
              </ul>
            </div>
            <div id="information-right">
              <img src={business} alt=""/><span>テンプル大学</span><br />
              <img src={lambda} alt=""/><span>ラムダスクール</span>
            </div>
          </div>
         </>
        )}
      </div>
    </div>
  )
}

export default Cards;
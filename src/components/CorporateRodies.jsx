import React from 'react';
import '../styles/CorporateRodies.css'

import cr1 from "../images/event/CorporateRodies/cr1.webp"
import cr2 from "../images/event/CorporateRodies/cr2.webp"
import cr3 from "../images/event/CorporateRodies/cr3.webp"
import akankshaa from "../images/event/CorporateRodies/akanshaa.webp"
import shubam from "../images/event/CorporateRodies/shubam.webp"
import shuvamF from "../images/event/CorporateRodies/shuvamF.webp"
import team from "../images/event/CorporateRodies/team.webp"
import Gallery from "./Gallery"
import Img1 from "../images/event/CorporateRodies/img1.webp"
import Img2 from "../images/event/CorporateRodies/img2.webp"
import Img3 from "../images/event/CorporateRodies/img3.webp"
import Img4 from "../images/event/CorporateRodies/img4.webp"
import Img5 from "../images/event/CorporateRodies/img5.webp"
const CorporateRoadies = () => {
  const imgArr = [
    Img1, Img2, Img3, Img4, Img5, cr1, cr2, cr3, team
  ]
  return (
    <div className="corpoRodies">
      <header>
        <h1 style={{ marginLeft: "0%" }}>Corporate roadies</h1>
      </header>
      <div className="team">
        <div className="about">
          <h1 style={{ marginLeft: "0%" }}>About Us</h1>
          <p>Corporate Roadies is a case study submission event organised by E-Cell NIT Jamshedpur. The event aims to provide a platform for students to solve diverse real-world problems. The participants are required to have a clear problem understanding, solving, clarity, and presentation skills to ace the competition.</p>
              <h3>It consist of two round -</h3>
              <li>Round 1: Problem Pitching  and Case Submission</li>
              <li>Round 2:Final Presentation</li> 
        </div>
        <div className="team-img">
          <img
            src={team}
            alt="Profile 3"
          />
        </div>
      </div>
      <h1 style={{ marginLeft: "3%" }}>Our Winner</h1>
      <div className="card-container">
        <div className="box1">
          <div className="card">
            <img
              src={cr1}
              alt="Card Image"
            />
            <div className="card-info">
              <h3>Gardening Experience Improvement</h3>
              <h4>Priyanshu Raj</h4>
            </div>
          </div>
          <div className="win-info">
            <h2>The Dumb Founder</h2>
            <h5>Position : 1st</h5>
          </div>
        </div>
        <div className="box1">
          <div className="card">
            <img
              src={cr2}
              alt="Profile 2"
            />
            <div className="card-info">
              <h3> Food Waste management</h3>
              <h4>Aswin | Anurag | Kishan | Shushant</h4>
            </div>
          </div>
          <div className="win-info">
            <h2>Thyperion Crew</h2>
            <h5>Position : 2nd</h5>
          </div>
        </div>
        <div className="box1">

          <div className="card">
            <img
              src={cr3}
              alt="Profile 3"
            />
            <div className="card-info">
              <h2> CMCR'S</h2>
              <h3> Food Waste management</h3>
              <h4>Peehal Sinha | Sairishik koli</h4>
            </div>
          </div>
          <div className="win-info">
            <h2> CMCR'S</h2>
            <h5>Position : 3rd</h5>
          </div>
        </div>
      </div>
      <div className="judges">
        <header>
          <h1>Special Thanks</h1>
        </header>

        <section className="profile-container">
          <div className="card-judge">
            <div className="profile">
              <img
                src={akankshaa}
                alt="Profile 1"
              />
            </div>
            <div className="judge-name">
            <h3>Dr. Akanksha Shukla</h3>

            </div>
            <div className="info">
              <ul>
                <li>Assistant Professor with a remarkable 12-year teaching tenure</li>
                <li>Noteworthy publications in SSCI and Scopus indexed journals</li>
                <li>Holds a Ph.D. in management from MNNIT Allahabad</li>
              </ul>
            </div>
          </div>
          <div className="card-judge">
            <div className="profile">
              <img
                src={shuvamF}
                alt="Profile 1"
              />
            </div>
            <div className="judge-name">
            <h3>Dr. Shubham Tripathi</h3>
            </div>
            <div className="info">
            <ul>
              <li>
                Currently serving as Assistant Professor at NIT Jamshedpur in
                Production & Industrial Engineering
              </li>
              <li>
                Ph.D. in Supply Chain Management with a focus on the fourth
                Industrial revolution
              </li>
              <li>Recipient of the 2018 Emerging Young Scientist Award</li>
            </ul>
            </div>
          </div>
          <div className="card-judge">
            <div className="profile">
              <img
                src={shubam}
                alt="Profile 1"
              />
            </div>
            <div className="judge-name">
            <h3>Mr. Shubham Khanna</h3>
            </div>
            <div className="info">
            <ul>
              <li>Director of T.I.M.E, Jamshedpur</li>
              <li>
                An alumnus of XLRI with outstanding achievements, including 99+%ile
                in CAT and XAT
              </li>
              <li>
                Senior Brand Manager at CIPLA, contributing extensive knowledge to
                the pharmaceutical industry
              </li>
            </ul>
            </div>
          </div>

          {/* <div className="profile">
            <img
              src={shuvamF}
              alt="Profile 2"
            />
          </div>
          <div className="profile">
            <img
              src={shubam}
              alt="Profile 3"
            />
          </div>
          <h3>Dr. Shubham Tripathi</h3>
          <h3>Mr. Shubham Khanna</h3>

          <div className="info">
            <ul>
              <li>
                Currently serving as Assistant Professor at NIT Jamshedpur in
                Production & Industrial Engineering
              </li>
              <li>
                Ph.D. in Supply Chain Management with a focus on the fourth
                Industrial revolution
              </li>
              <li>Recipient of the 2018 Emerging Young Scientist Award</li>
            </ul>
          </div>

          <div className="info leftmost">
            <ul>
              <li>Director of T.I.M.E, Jamshedpur</li>
              <li>
                An alumnus of XLRI with outstanding achievements, including 99+%ile
                in CAT and XAT
              </li>
              <li>
                Senior Brand Manager at CIPLA, contributing extensive knowledge to
                the pharmaceutical industry
              </li>
            </ul>
          </div> */}
        </section>
      </div>
      <Gallery imgArr={imgArr} />
    </div>
  );
};

export default CorporateRoadies;

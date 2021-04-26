import React from "react";
import "./record.css";
import "react-bootstrap";
import flag from "./flag.png";
import cheki from "./chek.png";
import ryous from "./ryous.png";

import abed from "./abed.png";

const Record = () => {
  return (
    <div>
      <section class="section">
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-5 text-center">
              <h1 className="tit mt-5">
                The world's biggest healthcare platform
              </h1>
              <p className="text-center mt-4 first-p">
                We work from 7 offices all over the world, bringing Docplanner
                Group to life in a dozen countries.
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <div className="row record-card ">
                <div className="col-md-3 my-4">
                  <div className="card  cards-0  ">
                    <div className="card-body text-center">
                      <img src={flag} className="mt-3" alt="same"/>
                      <h3 className="h8 mt-3">Leader in 12 countries</h3>
                      <p className="card-text card-p">
                        Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia,
                        Czech Republic, Portugal, Argentina, Peru and Chile
                      </p>
                    </div>
                  </div>
                  <div className="card  cards-1 mt-3">
                    <div className="card-body text-center">
                      <img src={ryous} className="mt-3" alt="same" />
                      <h3 className="h8 mt-3">61.9 mln unique patients</h3>
                      <p className="card-text card-p mt-4">
                        visit our websites each month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="card  cards-2">
                    <div className="card-body text-center">
                      <img src={cheki} className="mt-3" alt="same" />
                      <h3 className="h8 mt-3">4.8 million appointments</h3>
                      <p className="card-text card-p mt-4">booked last month</p>
                    </div>
                  </div>
                  <div className="card  cards-2 mt-3">
                    <div className="card-body text-center">
                      <img src={abed} className="mt-3" alt="same"/>
                      <h3 className="h8 mt-3">92.5k active doctors</h3>
                      <p className="card-text card-p mt-4">
                        trust our solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Record;

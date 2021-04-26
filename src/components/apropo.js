import React, { Component } from "react";
import "./apropo.css";
import theimg from "./sygnet.png";
import 'react-bootstrap'
export default class Apropo extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div>
             <img src={theimg} alt="slog" />
          </div>
          <div className="mt-5">
            <h1 className="h1">Making the healthcare experience more human</h1>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mt-3 para">
                <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>

            </div>
            <div className="col-md-6 mt-3 para">
            <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

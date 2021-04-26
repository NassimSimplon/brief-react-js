import React from "react";
import { Card, Button } from "react-bootstrap";
import "react-bootstrap";
import pola from "./polanda.png";
import "./country.css";
import bar from "./bar.png";
import ista from "./ista.png";
import rome from "./rome.png";
import bol from "./bol.png";
import mex from "./mex.png";




const Country = () => {
  return (
    <div>
      
      {/* --------------------------------title and paragragh------------------------- */}
      
      <div className="container ">
        <h1 className=" titel text-center mt-5">
          Improve the lives of millions. <br /> Change yours forever
        </h1>
        <p className="second-para text-center mt-5">
          More than 1400 team mates share our same vision, goals and passion.
          <br /> With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna,
          Mexico City <br /> and Curitiba, our search for great talent never
          stops.
        </p>
      </div>
      <br />

{/* -------------------------------------first cards---------------------------------------- */}
      
      <div className="container ms-5 mt-5 fos">
        <div className="row text-center d-flext align-items:center ms-5 mt">
          <div className="col-md-4 ms-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pola} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Warsaw</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bar} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Barcelona</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ista} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Istanbul</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

{/* -----------------------------------second card----------------------------------------- */}

      <div className="container ms-5 mt-5 fos">
        <div className="row text-center d-flext align-items:center ms-5 mt">
          <div className="col-md-4 ms-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={rome} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Rome</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bol} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Bologna</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={mex} />
              <Card.Body className="cardy-body">
                <Card.Title className="mt-2">Mexico</Card.Title>

                <Button variant="primary  " size="sm">
              
                  OPENINGS
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Country;

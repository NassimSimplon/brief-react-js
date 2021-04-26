import React from "react";
import { Card } from "react-bootstrap";
import "./card.js";
import "react-bootstrap";

function Cara() {
  return (
    <div className="container center ms-5 ">
      <div className="row center d-inline-flex  ">
        <div className="col-md-4">
          <Card className="bg-info text-white p-1" style={{ width: "20rem" }}>
            <Card.Header className="d-flex justify-content-start border border-info mt-3 bg-info">
              <i class="fas fa-users" ></i>
            </Card.Header>
            <Card.Body>
              <Card.Title className="d-flex justify-content-start ">
                <h4>For patients</h4>
              </Card.Title>
              <Card.Text className="mt-1">
                <h6>
                  Find a doctor, book a visit and solve any health-related doubt
                </h6>
                <br />
                <br />
                <br />
                <h8 className="text-white border-bottom  text-white ">
                  Choose Contry <i class="fas fa-angle-down" ></i>
                </h8>
                <br/><br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card
            className="bg-success text-white p-1"
            style={{ width: "20rem" }}
          >
            <Card.Header className="d-flex justify-content-start border border-success mt-3 bg-success">
              <i class="fas fa-user"></i>
            </Card.Header>
            <Card.Body>
              <Card.Title className="d-flex justify-content-start ">
                <h4>For doctors</h4>
              </Card.Title>
              <Card.Text className="mt-1">
                <h6 sclassName="para">
                  
                  Save time managing visits and cut no-shows by half
                </h6>
                <br />
                <br />
                <br />
                <h8 className="text-white border-bottom  text-white ">
                  Choose Contry <i class="fas fa-angle-down"></i>
                </h8>
                <br/><br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white p-1" style={{ width: "20rem" }}>
            <Card.Header className="d-flex justify-content-start border border-dark mt-3 bg-dark">
              <i class="fas fa-building"></i>
            </Card.Header>
            <Card.Body>
              <Card.Title className="d-flex justify-content-start nasa">
                <h4> For clinics</h4>
              </Card.Title>
              <Card.Text className="mt-1">
                <h6>
                  Deliver an exceptional patient experience in your clinic
                </h6>
                <br />
                <br />
                <br />
                <h8 className="text-white border-bottom  text-white ">
                  Choose Contry <i class="fas fa-angle-down"></i>
                </h8>
                <br/><br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cara;

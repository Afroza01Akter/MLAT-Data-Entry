import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="cards">
        <div className="cards__inside">
          <Card>
            <Card.Body>
              <div className="cards__icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h2>714K</h2>
              <p>Total Data</p>
            </Card.Body>
          </Card>
        </div>

        <div className="cards__inside bg-color1">
          <Card>
            <Card.Body>
              <div className="cards__icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h2>714K</h2>
              <p>Total Data</p>
            </Card.Body>
          </Card>
        </div>

        <div className="cards__inside bg-color2">
          <Card>
            <Card.Body>
              <div className="cards__icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h2>714K</h2>
              <p>Total Data</p>
            </Card.Body>
          </Card>
        </div>

        <div className="cards__inside bg-color3">
          <Card>
            <Card.Body>
              <div className="cards__icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h2>714K</h2>
              <p>Total Data</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;

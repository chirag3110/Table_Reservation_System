import React from "react";
import { Row, Col, Button } from "reactstrap";
import south from "../images/southindian.jfif";
import image from "../images/cafee.jpg";
import chole from "../images/chole.jpg";
import biryani from "../images/biryani.jpg";
const Main = (props) => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center">
        <Col className="name">The Taste of India</Col>
      </Row>
      <Row noGutters className="text-center align-items-center">
        <Col>
          <p className="looking-for-pizza text-muted">
            <i>One stop destination for great Indian Food</i>
          </p>
        </Col>
      </Row>
      <div className="container text-center">
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col-lg-4">
            <img
              src={south}
              alt="cafe"
              className="big-img"
              style={{
                width: "18em",
                height: "11em",
                borderRadius: "50%",
                opacity: "0.8",
              }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src={biryani}
              alt="cafe"
              className="big-img"
              style={{
                width: "18em",
                height: "11em",
                borderRadius: "50%",
                opacity: "0.8",
              }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src={chole}
              alt="cafe"
              className="big-img"
              style={{
                width: "18em",
                height: "11em",
                borderRadius: "50%",
                opacity: "0.8",
              }}
            />
          </div>
        </div>
      </div>
      <hr style={{ width: "60%", marginTop: "2em" }}></hr>
      <Row>
        <Col className="text-center">
          <span
            className="looking-for-pizza blink"
            style={{ fontSize: "2rem" }}
          >
            Now you can prebook your seat at the restaurant
          </span>
        </Col>
      </Row>
      <Row noGutters className="text-center align-items-center py-lg-3">
        <Col>
          <Button
            color="none"
            className="book-table-btn"
            onClick={(_) => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={image}
            alt="cafe"
            className="big-img"
            style={{ background: "transparent", opacity: "0.7" }}
          />
        </Col>
      </Row>
      <div className="container">
        <div className="row text-center px-4">
          <div className="col-lg-6">
            <i>
              . When we think about celebrations, it is always our first option
              and it never disappoints. From the starter to the dessert the
              quality and tastes of everything was outstanding, might have been
              the best meal I have ever been served. Service was delightful and
              very professional. 10/10 <br />
              <br />
              <i> - Rajat Sharma </i>
            </i>
          </div>
          <div className="col-lg-6">
            <i>
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
              <br />
              <br />
              <i> - Sakshi Gupta</i>
            </i>
          </div>
        </div>
      </div>
      <Row className="looking-for-pizza text-center text-muted">
        <Col>
          <b>Hope to see you Soon</b>&nbsp;
          <i class="fas fa-smile-beam smile"></i>
        </Col>
      </Row>
    </div>
  );
};

export default Main;

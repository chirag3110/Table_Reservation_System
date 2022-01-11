import React from "react";
import {Row,Col} from "reactstrap";



const ThankYou = _ => {
    return(
        <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Booking Successful! <i class="fas fa-check-circle check" ></i></p>
          <i class="fas fa-utensils thank-you-food"></i>
          <p className="thanks-subtext">
            You should receive an email with the details of your reservation.
          </p>
        </Col>
      </Row>
    </div>
    );
};

export default ThankYou;

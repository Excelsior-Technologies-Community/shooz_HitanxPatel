import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="mapSection_wrapper">
      <Container fluid className="p-0">
        <div className="mapSection_mapContainer">
          
          <iframe
            title="store-location"
            src="https://www.google.com/maps?q=Copley,South%20Australia%205732&output=embed"
            className="mapSection_map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="mapSection_card text-center">
            <h2 className="mapSection_title">Our store</h2>

            <p className="mapSection_address">
              Copley,<br />
              South Australia 5732
            </p>

            <p className="mapSection_timing">
              Mon - Fri, 10am - 9pm <br />
              Saturday, 11am - 9pm <br />
              Sunday, 11am - 5pm
            </p>

            <Button className="mapSection_button">
              📍 GET DIRECTIONS
            </Button>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default MapSection;
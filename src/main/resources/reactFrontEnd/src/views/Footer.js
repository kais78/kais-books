import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light border-top border-info mt-5">
     
      <Row className='navco'>
        <Col md="12"><h3>© 2020 medical books</h3></Col>
      </Row>
    </Container>
  );
};

export default Footer;

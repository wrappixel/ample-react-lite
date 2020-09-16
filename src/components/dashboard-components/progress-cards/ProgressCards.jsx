import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

const ProgressCards = () => {
  return (
    <Row>
      <Col md={6} lg={3}>
        <Card>
          <CardBody>
            <div className="d-flex flex-row">
              <div className="round align-self-center round-success">
                <i className="ti-wallet"></i>
              </div>
              <div className="ml-3 align-self-center">
                <h3 className="mb-0">$18090</h3>
                <span className="text-muted">Income</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card>
          <CardBody>
            <div className="d-flex flex-row">
              <div className="round align-self-center round-info">
                <i className="ti-user"></i>
              </div>
              <div className="ml-3 align-self-center">
                <h3 className="mb-0">2690</h3>
                <span className="text-muted">Users</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card>
          <CardBody>
            <div className="d-flex flex-row">
              <div className="round align-self-center round-danger">
                <i className="ti-calendar"></i>
              </div>
              <div className="ml-3 align-self-center">
                <h3 className="mb-0">20 march</h3>
                <span className="text-muted">My birthday</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card>
          <CardBody>
            <div className="d-flex flex-row">
              <div className="round align-self-center round-warning">
                <i className="ti-settings"></i>
              </div>
              <div className="ml-3 align-self-center">
                <h3 className="mb-0">6540</h3>
                <span className="text-muted">pending</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProgressCards;

import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import {
  ProductYearlySales,
  RecentSales,
  ChatListing,
  ProgressCards,
  RecentComments,
} from "../../components/dashboard-components";

import img1 from "../../assets/images/big/img1.jpg";
import img2 from "../../assets/images/big/img2.jpg";
import img3 from "../../assets/images/big/img3.jpg";

const Starter = () => {
  return (
    <div>
      <ProgressCards />
      <Row>
        <Col lg={12}>
          <ProductYearlySales />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <RecentSales />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <RecentComments />
        </Col>
        <Col sm={12} lg={4}>
          <ChatListing />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img1} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/*--------------------------------------------------------------------------------*/}
          {/*Card-1*/}
          {/*--------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img3} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Starter;

import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";

//Line chart
let lineData = {
  labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
  datasets: [
    {
      label: "Income",
      borderWidth: 1,
      backgroundColor: "rgba(44,171,227,.1)",
      borderColor: "rgb(44,171,227)",
      pointBorderColor: "rgb(44,171,227)",
      pointBackgroundColor: "rgb(44,171,227)",
      data: [0, 15, 6, 11, 25, 9, 18, 24],
    },
    {
      label: "Outcome",
      borderWidth: 1,
      backgroundColor: "rgba(152,166,173,.1)",
      borderColor: "rgb(152,166,173)",
      pointBorderColor: "rgb(152,166,173)",
      pointBackgroundColor: "rgb(152,166,173)",
      data: [0, 8, 11, 22, 8, 10, 5, 21],
    },
  ],
};

const ProductYearlySales = () => {
  return (
    <Card>
      <CardBody>
        <div className="d-md-flex align-items-center">
          <div>
            <CardTitle className="text-uppercase">
              Product Yearly Sales
            </CardTitle>
          </div>
          <div className="ml-auto d-flex align-items-center">
            <ul className="list-inline font-12 dl mr-3 mb-0">
              <li className="border-0 p-0 text-info list-inline-item">
                <i className="fa fa-circle"></i> Mac
              </li>
              <li className="border-0 p-0 text-muted list-inline-item">
                <i className="fa fa-circle"></i> Windows
              </li>
            </ul>
          </div>
        </div>
        <Row>
          <Col lg="12">
            <div className="campaign ct-charts mt-4">
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 250 }}
              >
                <Line
                  data={lineData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: false,
                      labels: { fontFamily: "Rubik" },
                    },
                    scales: {
                      yAxes: [
                        {
                          stacked: true,
                          gridLines: { display: false },
                          ticks: { fontFamily: "Rubik" },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Rubik" },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductYearlySales;

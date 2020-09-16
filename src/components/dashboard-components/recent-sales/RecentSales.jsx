import React from "react";

import { Card, CardBody, CardTitle, Input, Table } from "reactstrap";

const RecentSales = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4 [General]                                                  */
    /*--------------------------------------------------------------------------------*/

    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle className="text-uppercase">Recent Sales</CardTitle>
          </div>
          <div className="ml-auto d-flex no-block align-items-center">
            <div className="dl">
              <Input type="select" className="custom-select">
                <option value="0">March 2020</option>
                <option value="1">April 2020</option>
                <option value="2">May 2020</option>
                <option value="3">June 2020</option>
              </Input>
            </div>
          </div>
        </div>
        <Table className="no-wrap v-middle font-weight-light mb-0" responsive>
          <thead>
            <tr className="border-0">
              <th className="border-0">#</th>
              <th className="border-0 text-uppercase">Name</th>

              <th className="border-0 text-uppercase">Status</th>
              <th className="border-0 text-uppercase">Date</th>
              <th className="border-0 text-uppercase">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Elite Admin</td>

              <td>
                <span className="text-uppercase">Sale</span>
              </td>
              <td>April 18, 2017</td>
              <td className="text-success">$24</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Real Homes WP Theme</td>

              <td>EXTENDED</td>
              <td>April 19, 2017</td>
              <td className="text-info">$1250</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ample Admin</td>

              <td className="text-uppercase">EXTENDED</td>
              <td>April 19, 2017</td>
              <td className="text-info font-medium">$1250</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Medical Pro WP Theme</td>

              <td>TAX</td>
              <td>April 20, 2017 </td>
              <td className="text-danger">-$24</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Hosting press html </td>

              <td>SALE</td>
              <td>April 21, 2017 </td>
              <td className="text-success">$24</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Digital Agency PSD</td>

              <td>SALE</td>
              <td>April 23, 2017</td>
              <td className="text-danger">-$14</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Helping Hands WP Theme</td>

              <td>MEMBER</td>
              <td>April 22, 2017</td>
              <td className="text-success">$64</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default RecentSales;

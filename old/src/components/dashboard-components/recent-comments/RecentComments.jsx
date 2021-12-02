import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";

const RecentComments = () => {
  return (
    <Card>
      <CardBody className="border-bottom">
        <CardTitle className="text-uppercase mb-0">Recent Commnets</CardTitle>
      </CardBody>
      <CardBody className="p-0">
        <div className="comment-widgets scrollable">
          {/* Comment Row */}
          <div className="d-flex flex-row comment-row mt-0 mb-0">
            <div className="p-2">
              <img
                src={img1}
                alt="user"
                width="40"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text w-100">
              <h5 className="font-normal mb-1">Pavan kumar</h5>
              <span className="text-muted mr-2 font-12">
                10:20 AM 20 may 2016
              </span>
              <span className="badge badge-info badge-rounded text-uppercase font-medium">
                Pending
              </span>
              <span className="mb-2 d-block font-14 text-muted font-light mt-3">
                Donec ac condimentum massa. Etiam pellentesque pretium lacus.
                Phasellus ultricies dictum suscipit. Aenean commodo
              </span>
              <div className="mt-3">
                <a
                  href="javacript:void(0)"
                  className="btn btn btn-rounded btn-outline-success mr-2 btn-sm"
                >
                  <i className="ti-check mr-1"></i>Approve
                </a>
                <a
                  href="javacript:void(0)"
                  className="btn-rounded btn btn-outline-danger btn-sm"
                >
                  <i className="ti-close mr-1"></i> Reject
                </a>
              </div>
            </div>
          </div>
          {/* Comment Row */}
          <div className="d-flex flex-row comment-row mt-0 mb-0">
            <div className="p-2">
              <img
                src={img2}
                alt="user"
                width="40"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text w-100">
              <h5 className="font-normal mb-1">Sonu Nigam</h5>
              <span className="text-muted mr-2 font-12">
                10:20 AM 20 may 2016
              </span>
              <span className="badge badge-success badge-rounded text-uppercase font-medium text-white">
                Approved
              </span>
              <span className="mb-2 d-block font-14 text-muted font-light mt-3">
                Donec ac condimentum massa. Etiam pellentesque pretium lacus.
                Phasellus ultricies dictum suscipit. Aenean commodo
              </span>
            </div>
          </div>
          {/* Comment Row */}
          <div className="d-flex flex-row comment-row mt-0 mb-0">
            <div className="p-2">
              <img
                src={img3}
                alt="user"
                width="40"
                className="rounded-circle"
              />
            </div>
            <div className="comment-text w-100">
              <h5 className="font-normal mb-1">Sonu Nigam</h5>
              <span className="text-muted mr-2 font-12">
                10:20 AM 20 may 2016
              </span>
              <span className="badge badge-danger badge-rounded text-uppercase font-medium text-white">
                Rejected
              </span>
              <span className="mb-2 d-block font-14 text-muted font-light mt-3">
                Donec ac condimentum massa. Etiam pellentesque pretium lacus.
                Phasellus ultricies dictum suscipit. Aenean commodo
              </span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default RecentComments;

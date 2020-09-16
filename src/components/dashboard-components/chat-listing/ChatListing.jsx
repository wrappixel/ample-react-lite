import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";
import img4 from "../../../assets/images/users/4.jpg";
import img5 from "../../../assets/images/users/5.jpg";
import img6 from "../../../assets/images/users/6.jpg";

const ChatListing = () => {
  return (
    <Card>
      <CardBody className="border-bottom">
        <CardTitle className="text-uppercase mb-0">Chat Listing</CardTitle>
      </CardBody>
      <CardBody className="pt-2">
        <ul className="list-style-none chat-list mb-0">
          <li className="mb-3">
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img1} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Varun Dhavan</h5>
                  <small className="text-success">Online</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-3">
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img2} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Akshay Kumar</h5>
                  <small className="text-muted">Offline</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-3">
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img3} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Shraddha Kapoor</h5>
                  <small className="text-success">Online</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-3">
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img4} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Madhuri Dixit</h5>
                  <small className="text-danger">Busy</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-3">
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img5} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Shaina Nehwal</h5>
                  <small className="text-muted">Offline</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="d-flex align-items-center">
                <img src={img6} className="rounded-circle" alt="" width="40" />
                <div className="ml-3">
                  <h5 className="mb-0 text-dark">Varun Dhavan</h5>
                  <small className="text-success">Online</small>
                </div>
                <div className="ml-auto chat-icon">
                  <button
                    type="button"
                    className="btn btn-success btn-circle btn-circle text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-circle btn-circle ml-2"
                  >
                    <i className="far fa-comments"></i>
                  </button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default ChatListing;

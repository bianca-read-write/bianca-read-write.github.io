import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const RSPVTrigger = styled.div`
  text-align: center;
  margin: 0;
  padding: 20px 70px;
  background: rgba(255, 255, 255, 0.75);

  button {
    background: #fff;
  }
`;

const ContactMe2 = () => {
  const history = useHistory();

  return (
    <div className="contact-me">
      <div className="contact-me-img-and-title">
        <div className="img object-fit">
          <div className="object-fit-cover">
            <img
              src="assets/img/edwards/9Y7A3248.jpg"
              alt="Contacts"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <RSPVTrigger className="contact-me-title">
          <button
            onClick={() => history.push("/rsvp")}
            className="btn btn-outline-primary"
            style={{ minHeight: "70px" }}
          >
            RSVP
          </button>
          {/* <a className="large" href={process.env.PUBLIC_URL + "/rsvp"}>RSVP</a> */}
        </RSPVTrigger>
      </div>
    </div>
  );
};

export default ContactMe2;

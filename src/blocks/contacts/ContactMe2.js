import React from "react";
import styled from "styled-components";

import { useHistory } from 'react-router-dom'

const RSPVTrigger = styled.div`
  text-align: center;
  margin: 0;
  border: 1px solid rgb(39, 64, 53);
  padding: 35px 70px;
  background: rgba(243, 242, 241, 0.7);

  &:hover {
    cursor: pointer;

    a.large {
      display: block;
      color: #8d9893;
    }
  }

  a.large {
    font-family: Recoleta-Bold, sans-serif;
    font-size: 2.474rem;
    transition: all 0.3s ease;
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

        <RSPVTrigger
          onClick={() => history.push('/rsvp')}
          className="contact-me-title"
        >
          <a className="large" href={process.env.PUBLIC_URL + "/rsvp"}>RSVP</a>
        </RSPVTrigger>
      </div>
    </div>
  );
};

export default ContactMe2;

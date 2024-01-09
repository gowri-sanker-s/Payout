import React from "react";
import "./overview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Overview = () => {
  return ( 
    <div className="overview">
      <div className="overview-head">
        <h3>Overview</h3>
        <button>Last Month <FontAwesomeIcon icon={faChevronDown} /></button>
      </div>
      <div className="boxes">
        <div className="box-1">
          <p>Online orders</p>
          <h2>231</h2>
        </div>
        <div className="box-1">
          <p>Amout received</p>
          <h2>₹23,92,312.19</h2>
        </div>{" "}
      </div>
    </div>
  );
};

export default Overview;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faChevronDown, faHouse, faClipboardList, faTableCellsLarge,faTruck,faBullhorn,faChartSimple, faMoneyBills, faLocationArrow, faPercent, faUsers,faPalette, faBolt } from '@fortawesome/free-solid-svg-icons'
import "./side.css";
const Side = () => {
  return (
    <>
      <div className="sidebar">
        <div className="side-head">
          <div className="profile">
            <div className="profile-img"></div>
            <div className="profile-name">
              <div className="name">Nishyan</div>
              <div className="visit">
                <ins>Visit store</ins>
              </div>
            </div>
          </div>
          <div className="arrow"><FontAwesomeIcon icon={faChevronDown} /></div>
        </div>

        <div className="side-contents">
          <ul>
            <li><FontAwesomeIcon icon={faHouse}  className="icon-main"/>Home</li>
            <li><FontAwesomeIcon icon={faClipboardList}  className="icon-main" />Orders</li>
            <li><FontAwesomeIcon icon={faTableCellsLarge}  className="icon-main" />Products</li>
            <li><FontAwesomeIcon icon={faTruck}  className="icon-main" />Delivery</li>
            <li><FontAwesomeIcon icon={faBullhorn}  className="icon-main" />Marketing</li>
            <li><FontAwesomeIcon icon={faChartSimple}  className="icon-main" />Analytics</li>
            <li><FontAwesomeIcon icon={faMoneyBills}  className="icon-main" />Payments</li>
            <li><FontAwesomeIcon icon={faLocationArrow} rotation={270}  className="icon-main" />Tools</li>
            <li><FontAwesomeIcon icon={faPercent}  className="icon-main" />Discounts</li>
            <li><FontAwesomeIcon icon={faUsers}  className="icon-main" />Audience</li>
            <li><FontAwesomeIcon icon={faPalette}  className="icon-main" />Appearence</li>
            <li><FontAwesomeIcon icon={faBolt}  className="icon-main" />plugins</li>
          </ul>
        </div>
        <div className="side-footer">
          <div className="logo"></div>
          <div className="content-footer">
          <FontAwesomeIcon icon={faWallet} color="white" className="wallet-icon"/>
          <div className="avail-cre">
            <p className="credit">Available Credits</p>
            <p className="credit-no">222.10</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;

import React from "react";
import "./Sidecontents.css";
import { GrLocation } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import {TbTruckReturn} from "react-icons/tb"
import {ImBlocked} from "react-icons/im"
import {BiChat} from "react-icons/bi"

const Sidecontents = () => {
  return (
    <>
      <div className="sidecontents-container">
        <div className="sidecontents-items">
          <div className="sidecontents-contents">
            <div className="delivary">
              <label>Delivery</label>

              <div className="delevary-flex">
                <GrLocation size={20} />
                <span>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</span>
              </div>

              <div className="standrad-delivary">
                <CiDeliveryTruck size={20} />
                <span>Standard Delivery 2 days</span>
              </div>

              <div className="cashon-delivary">
                <GiMoneyStack size={20} />
                <span>Cash On Delevary Avilable</span>
              </div>
            </div>

            <div className="product-services">
              <label>Services</label>

              <div className="return-flex">
                <TbTruckReturn size={20} />
                <span>7 days return </span>
              </div>

              <div className="warrenty-flex">
                <ImBlocked size={18} />
                <span>Avilable for 3 months </span>
              </div>

            </div>


            <div className="vendor-details">
              <div className="sellor-flex">
                <div className="sellor-head">
              <span>Sold by </span>
                <h1> Fantastic clothing </h1>
                </div>
                <div className="sellor-body">
                    <span> Chat</span>
                    <BiChat />
                </div>
              </div>
            </div>

            {/* <div className="costumers-response">
                <div className="response-body">
                    <div className="response-card">
                        <span>Positive selling response</span>
                        <label> 87%</label>

                        <span>ship on time</span>
                        <label> 98%</label>

                        <span>chat response</span>
                        <label> 98%</label>
                    </div>
                </div>

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidecontents;

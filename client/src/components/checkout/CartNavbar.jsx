import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdPayment } from "react-icons/md";

import Faballeynav2 from "../Navbars/images/faballey2ndnavbar.png";
import { useSelector } from "react-redux";
import { loadData } from "../../utils/localStorage";

export const CartNavbar = () => {
  const userName = loadData("userName");
  const token = useSelector((state) => state.token);

  return (
    <div className="cart-navbar">
      <div className=" w-9/12">
        <img className="my-logo" src={Faballeynav2} alt="" />
        <div className="icon-in-navbar">
          <FaShoppingCart style={{ color: "rgb(252, 100, 134)" }} />
          <BiLogIn />
          <MdOutlineLocalShipping />
          <MdPayment />
        </div>
        <div className="guest-logo">
          <FaUserAlt />
          <span>{userName}</span>
        </div>
      </div>
    </div>
  );
};

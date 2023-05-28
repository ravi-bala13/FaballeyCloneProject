import { useEffect } from "react";
import { CartNavbar } from "./CartNavbar";
import React from "react";
import { MdDelete } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { loadData, saveData } from "../../utils/localStorage";
import { backendUrl } from "../../utils/Constants";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cartList, setCartList] = useState([]);
  console.log("cartList:", cartList);

  const totalPrice = findTotalPrice();

  function findTotalPrice() {
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
      sum += +cartList[i].price;
    }
    return Math.floor(sum);
  }

  const userId = loadData("userId");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    try {
      fetch(`${backendUrl}/cart/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log("data:", data[0]);
          // console.log("data:", data[0].products);
          setCartList(data[0].products);
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  const removeProductsFromCart = (productId) => {
    let temCartList = [...cartList];
    temCartList = temCartList.filter((item) => item._id != productId);
    setCartList(temCartList);
    try {
      fetch(`${backendUrl}/cart/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data:", data);
          alert("Product removed success fullly");
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <CartNavbar />
      <div className="red-clr-box">
        Score free shipping on orders above INR 3000
      </div>
      <div className="main-content w-9/12">
        <div className="left-side w-2/3">
          <div className="top-heading">
            <h2>
              My Shopping Bag ({userId ? cartList.length : "Please login"})
            </h2>
          </div>

          <div className="cart-items w-full">
            {cartList.map((item) => (
              <div key={item._id} className="cart-each-items w-full ">
                <img src={item.image[0]} alt="" />

                <div className="each-item-details">
                  <div className="details-top">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={{ width: "90%" }}>
                        <h2>{item.productName}</h2>
                      </div>
                      <div style={{ width: "10%" }}>
                        <h2>₹{item.price}</h2>
                      </div>
                    </div>

                    <img src="https://i.ibb.co/ctVkPvf/Capture.jpg" alt="" />
                  </div>
                  <div className="details-footer">
                    <span>Edit Item</span>
                    <span>Move to wishlist</span>
                    <span>
                      <MdDelete
                        onClick={() => removeProductsFromCart(item._id)}
                        className="delete-icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-side w-1/3">
          <div className="top-heading">
            <h2>Price Details</h2>
          </div>

          <div className="priceTag">
            <div className="donation">
              <div>
                <h2>Donation</h2>
                <p>
                  Donation Extra 10 (This donation is towards NGO Ssrishti that
                  is providing food and hygiene essentials to migrant labors
                  during the COVID-19 lockdown)
                </p>
              </div>
              <span>
                <input type="checkbox" name="" id="" />
              </span>
            </div>

            <div>
              <table>
                <tbody>
                  <tr className="border-y-2	">
                    <td>
                      <span className="coupon">
                        <BsFillPlusCircleFill />
                        Apply coupon
                      </span>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <span className="coupon">
                      <BsFillPlusCircleFill />
                      Redeem Gift cards
                    </span>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">Subtotal</td>
                      <td className="t-data righting">₹{totalPrice}</td>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">Total</td>
                      <td className="t-data righting">₹{totalPrice}</td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link to={`/shipping/${totalPrice}`}>
              <button className="place-order ">
                <a href="#" className="text-white">
                  Place Order
                </a>{" "}
              </button>
            </Link>
          </div>
          <br />
          <p>Estimated Delivery Time</p>
          <p className="due-date">India : 4-6 business days. </p>
          <p>International: 7-12 business days.</p>
        </div>
      </div>

      <div className="footer-static-img">
        <img src="https://i.ibb.co/wNQGbjn/Capture.jpg" alt="footer part" />
      </div>
    </div>
  );
};

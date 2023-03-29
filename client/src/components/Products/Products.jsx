import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { Navbar } from "../Navbars/Nav/Navbar";

export const Products = () => {
  const [prodList, setProdList] = useState([]);
  console.log("prodList:", prodList);
  const [forSortList, setForSortList] = useState([]);

  const left_opitons = [
    "PARTY WEAR",
    "WORK FROM COLLECTION",
    "LOUNGEWEAR",
    "NAB-NOW PIECES",
    "TOPS",
    "DRESSES",
    "SKIRTS",
    "BOTTOMS",
    "WINTER",
    "WEAR",
    "JEANS",
    "SHORTS",
    "SHRUGS",
    "UNDER 999",
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const handleColors = (e) => {
    const option = e.target.value;

    if (option === "blue") {
      const updatelist = prodList.filter((ev) =>
        ev.color.filter((each_clr) => each_clr === option)
      );
      setProdList(updatelist);
    }

    if (option === "pink") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "red") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "green") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "yellow") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }
    if (option === "maroon") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }
  };

  const handleDiscount = (e) => {
    const option = e.target.value;
    console.log("option:", option);

    if (option === "discount") {
      setProdList(forSortList);
    }

    if (option === "ten") {
      const updatelist = forSortList.filter(
        (ev) =>
          (ev.discount / ev.price) * 100 <= 20 &&
          (ev.discount / ev.price) * 100 > 10
      );
      setProdList(updatelist);
    }

    if (option === "twenty") {
      const updatelist = forSortList.filter(
        (ev) =>
          (ev.discount / ev.price) * 100 <= 30 &&
          (ev.discount / ev.price) * 100 > 21
      );
      setProdList(updatelist);
    }

    if (option === "thirty") {
      const updatelist = forSortList.filter(
        (ev) =>
          (ev.discount / ev.price) * 100 <= 40 &&
          (ev.discount / ev.price) * 100 > 31
      );
      setProdList(updatelist);
    }

    if (option === "forty") {
      const updatelist = forSortList.filter(
        (ev) =>
          (ev.discount / ev.price) * 100 <= 50 &&
          (ev.discount / ev.price) * 100 > 41
      );
      setProdList(updatelist);
    }
  };

  const handlePricesort = (e) => {
    const option = e.target.value;
    console.log("option:", option);

    if (option === "price") {
      setProdList(forSortList);
    }

    if (option === "fivehundred") {
      const updatelist = forSortList.filter(
        (ev) => ev.price - ev.discount > 500 && ev.price - ev.discount <= 1000
      );
      setProdList(updatelist);
    }

    if (option === "onethousand") {
      const updatelist = forSortList.filter(
        (ev) => ev.price - ev.discount > 1001 && ev.price - ev.discount <= 1500
      );
      setProdList(updatelist);
    }

    if (option === "fifteenhundred") {
      const updatelist = forSortList.filter(
        (ev) => ev.price - ev.discount > 1501 && ev.price - ev.discount <= 2000
      );
      setProdList(updatelist);
    }

    if (option === "twothousand") {
      const updatelist = forSortList.filter(
        (ev) => ev.price - ev.discount > 2001 && ev.price - ev.discount <= 3000
      );
      setProdList(updatelist);
    }
  };

  const handleImages = (id) => {
    const updatelist = forSortList.map((e) => {
      if (e._id === id) {
        e.status = !e.status;
      }
      return e;
    });
    setProdList(updatelist);
  };

  const getProducts = () => {
    try {
      fetch("https://cryptic-oasis-92145.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          // console.log("data:", data);
          setProdList(data);
          setForSortList(data);
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container">
          <div className="left-col">
            <table className="left-col-options">
              <tbody>
                {left_opitons.map((item, i) => (
                  <tr key={i}>
                    <td className="border-b-2">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="right-col">
            <div className="top-input-col">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <select id="" className="border border-black">
                        <option value="casual">Casual Wear</option>
                        <option value="maroon">Party Wear</option>
                        <option value="yellow">Work wear</option>
                      </select>
                    </td>
                    <td>
                      <select
                        id=""
                        onChange={handleColors}
                        className="border border-black"
                      >
                        <option value="all"> All Colors</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                        <option value="maroon">Maroon</option>
                        <option value="yellow">Yellow</option>
                      </select>
                    </td>
                    <td>
                      <select id="" className="border border-black">
                        <option value="size"> All size</option>
                        <option value="m">Medium</option>
                        <option value="s">Small</option>
                        <option value="l">Large</option>
                      </select>
                    </td>
                    <td>
                      <select
                        id=""
                        onChange={handleDiscount}
                        className="border border-black"
                      >
                        <option value="discount"> Discount</option>
                        <option value="ten">10% - 20%</option>
                        <option value="twenty">21% - 30%</option>
                        <option value="thirty">31% - 40%</option>
                        <option value="forty">41% - 50%</option>
                        <option value="fifty">51% and above </option>
                      </select>
                    </td>
                    <td>
                      <select
                        id=""
                        onChange={handlePricesort}
                        className="border border-black"
                      >
                        <option value="price"> Price</option>
                        <option value="fivehundred">₹500 - ₹1000</option>
                        <option value="onethousand">₹1001- ₹1500</option>
                        <option value="fifteenhundred">₹1501- ₹2000</option>
                        <option value="twothousand">₹2001- ₹3000</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="" id="" className="border border-black">
                        <option value="price">Waist </option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="" className="border border-black">
                        <option value="price">Pattern</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="" className="border border-black">
                        <option value="price">Fabric</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="" className="border border-black">
                        <option value="price">Fit</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="" className="border border-black">
                        <option value="price">Collections</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bottom-products">
              {prodList.map((item) => (
                <Link to={`/products/details/${item._id}`}>
                  <div className="each-item" key={item._id}>
                    <div className="for-img">
                      <img
                        onMouseEnter={() => handleImages(item._id)}
                        onMouseLeave={() => {
                          handleImages(item._id);
                        }}
                        src={item.status ? item.image[0] : item.image[1]}
                        alt="no load"
                      />
                      {item.price - item.discount >= 2000 ? (
                        <span className="offer-circle">
                          50% <br />
                          OFF
                        </span>
                      ) : null}
                    </div>
                    <div className="for-details">
                      <p style={{ margin: "0px", color: "black" }}>
                        {item.productName}
                      </p>
                      <p
                        style={{
                          margin: "0px",

                          fontWeight: "bolder",
                          color: "rgb(252, 100, 134)",
                        }}
                      >
                        ₹{item.price - item.discount}
                        {"  "}
                        <strike style={{ color: "black" }}>
                          ₹{item.price}
                        </strike>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Products;

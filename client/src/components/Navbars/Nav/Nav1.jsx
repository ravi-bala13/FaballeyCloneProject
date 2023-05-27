import { FaChevronRight } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Faballeynav from "../images/logo.png";
import Indya from "../images/indya.png";
import "antd/dist/antd.min.css";
// import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getID, setID } from "../../../Redux/action";
import {
  clearLocalStorage,
  loadData,
  saveData,
} from "../../../utils/localStorage";
import axios from "axios";
import { login, signup } from "../../Functions/login_signup";
import Login from "../Login";
import Signup from "../Signup";
export const Nav1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userName = loadData("userName");
  const [isLoading, setIsLoading] = useState(false);

  const backendUrl = "https://faballeyclonebackend.onrender.com";

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // signup form

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Signup submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    signup(formValues, setIsLoading);
    setIsModalVisible(false);
  };
  const [loginSucess, setloginSucess] = useState(0);

  const [loginClick, setLoginClick] = useState(0);

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log("here i am getting data", formValues);
  //     fetch(`${backendUrl}/users`, {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify(formValues),
  //     });
  //     setIsModalVisible(false);
  //     setLoginClick(loginClick + 1);
  //   }
  // }, [formErrors]);

  // login

  const handleSubmitss = (e) => {
    e.preventDefault();
    login(formValues, setloginSucess, setIsLoading);
    setLoginClick(loginClick + 1);
  };

  const [loginBtn, setLoginBtn] = useState(false);

  //   ******************* Bals code ********
  // // Accessing redux store
  // const userId = useSelector((state) => state.userId);
  // const dispatch = useDispatch();
  // **************************************

  // const getData = () => {
  //   let res = axios
  //     .post(`${backendUrl}/users/login`, {
  //       body: JSON.stringify(formValues),
  //     })
  //     .then((res) => {
  //       console.log("res", res, res.data);
  //       // let r = await res.json();
  //       // console.log("res", r);
  //       // here i am receiving email, user I'D and password
  //       console.log("check email is there or not", res.data);
  //       //   ******************* Bals code ********
  //       console.log("user", res._id);
  //       saveData("userId", res._id);

  //       dispatch(getID(res._id));
  //       console.log("userId:", userId);
  //       // **************************************

  //       alert("Login sucessfully");

  //       setloginSucess(loginSucess + 1);
  //       // setNavbar(true);
  //     });
  // };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const navigate = useNavigate();
  const logout = () => {
    clearLocalStorage();
    navigate("/home");
  };

  return (
    <>
      <div className="w-full h-10 border border-blue-50 flex">
        <div className="w-2/6 border border-white text-xs font-bold flex mt-3">
          <span className="text-pink-600 ml-6">EOSS | UPTO 70% Off.</span>
          <span>
            Shop Now
            <FaChevronRight className="inline-block" />
          </span>
        </div>
        <div className="w-4/6 border border-white flex h-full justify-center">
          <img className="w-28" src={Faballeynav} alt="logo" />
          <img className="w-28" src={Indya} alt="Indya" />
        </div>
        <div className="w-2/6 border border-white">
          <div className="text-xs font-medium mt-2 float-right mr-6">
            <p className="inline-block cursor-pointer flex">
              <p>Track Order | Gift Cards | &nbsp;</p>
              {userName ? (
                <p>
                  {userName} | <span onClick={logout}>Logout</span>
                </p>
              ) : (
                <>
                  <span
                    onClick={() => setLoginBtn(true)}
                    onDoubleClick={() => setloginSucess(0)}
                  >
                    Login&nbsp;
                  </span>
                  | <span onClick={showModal}> &nbsp; Sign up </span>
                </>
              )}{" "}
              <Link to={"/checkout/cart"}>
                <MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" />
              </Link>
            </p>

            {/* <a href="/checkout/cart" className="text-black">
              <MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" />
            </a> */}
          </div>
        </div>
      </div>
      {/* sign up */}
      <Signup
        formValues={formValues}
        handleChange={handleChange}
        formErrors={formErrors}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleOk={handleOk}
        setIsModalVisibl={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      {/* login */}
      {loginBtn ? (
        <Login
          isLoading={isLoading}
          setLoginBtn={setLoginBtn}
          loginSucess={loginSucess}
          handleSubmitss={handleSubmitss}
          formValues={formValues}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      ) : null}
    </>
  );
};

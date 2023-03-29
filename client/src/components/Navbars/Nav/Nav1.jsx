import { FaChevronRight } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Faballeynav from "../images/logo.png";
import Indya from "../images/indya.png";
import "antd/dist/antd.min.css";
// import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getID } from "../../../Redux/action";
import { saveData } from "../../../utils/localStorage";
export const Nav1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const [loginSucess, setloginSucess] = useState(0);

  const [loginClick, setLoginClick] = useState(0);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("here i am getting data", formValues);
      fetch(`https://cryptic-oasis-92145.herokuapp.com/users`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formValues),
      });
      setIsModalVisible(false);
      setLoginClick(loginClick + 1);
    }
  }, [formErrors]);
  // login

  const handleSubmitss = (e) => {
    e.preventDefault();
    getData();
    setLoginClick(loginClick + 1);
  };

  const [loginBtn, setLoginBtn] = useState(false);

  // const [ChangeNavbar, setNavbar] = useState(false);
  //   ******************* Bals code ********
  const userId = useSelector((state) => state.userId);

  const dispatch = useDispatch();
  // **************************************

  const getData = async () => {
    let res = await fetch(`https://cryptic-oasis-92145.herokuapp.com/users/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formValues),
    });
    let r = await res.json();
    // here i am receiving email, user I'D and password
    console.log("check email is there or not", r);
    //   ******************* Bals code ********
    console.log("user", r._id);
    saveData("userId", r._id);

    dispatch(getID(r._id));
    console.log("userId:", userId);
    // **************************************

    alert("Login sucessfully");

    setloginSucess(loginSucess + 1);
    // setNavbar(true);
  };

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
            <p className="inline-block cursor-pointer">
              Track Order | Gift Cards |{" "}
              <span
                onClick={() => setLoginBtn(true)}
                onDoubleClick={() => setloginSucess(0)}
              >
                Login
              </span>{" "}
              | <span onClick={showModal}>Sign up</span>
            </p>
            {/* <Link to={"/checkout/cart"}>
              {" "}
              <MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" />
            </Link> */}
            <a href="/checkout/cart" className="text-black"><MdCardTravel className="inline-block ml-2 text-xl cursor-pointer" /></a>
          </div>
        </div>
      </div>
      {/* sign up */}
      <Modal
        title="SIGNUP"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="w-full py-8">
          <div className="w-11/12 ml-2">
            {/* signUp form */}
            <form onSubmit={handleSubmit}>
              <label>
                <h4 className="font-bold ml-12">for a quicker checkout</h4>
              </label>
              <div className="w-full m-auto">
                <div className="w-11/12 m-auto">
                  <input
                    className="w-full h-10 border border-black"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-red-500">{formErrors.email}</p>
                <div className="w-11/12 m-auto">
                  <input
                    className="w-full h-10 border border-black"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-red-500">{formErrors.password}</p>
                <button
                  className="w-11/12 py-2 border border-pink-600 bg-pink-600 font-bold text-white"
                  style={{ marginLeft: "18px" }}
                >
                  CONTINUE
                </button>
              </div>
            </form>
            <div className="w-full justify-center ml-16 mt-4">
              <h5 className="inline-block ml-28">Or continue with</h5>
            </div>
            <div className="w-full flex justify-evenly mt-4">
              <div className="w-5/12">
                <img
                  className="cursor-pointer"
                  src="https://www.faballey.com/images/loginfb.png"
                  alt=""
                />
              </div>
              <div className="w-5/12">
                <img
                  className="cursor-pointer"
                  src="https://www.faballey.com/images/logingogl.png"
                  alt="google"
                />
              </div>
            </div>
            <h5
              className="inline-block ml-52 mt-6 cursor-pointer"
              onClick={() => setIsModalVisible(false)}
            >
              skip
            </h5>
          </div>
        </div>
      </Modal>
      {/* login */}
      {loginBtn ? (
        <div
          className="w-4/12 py-8 m-auto fixed z-50 bg-white flex flex-col"
          style={{ marginLeft: "450px", marginTop: "50px" }}
        >
          <div className="w-full text-black font-bold text-xl flex justify-between">
            <div className="ml-4">
              <h1 className="">Login</h1>
            </div>
            <div>
              <h1
                className="mr-4 cursor-pointer"
                onClick={() => setLoginBtn(false)}
              >
                X
              </h1>
            </div>
          </div>
          <hr />
          <div className="w-11/12 ml-2 mt-10">
            {/* login form */}
            <form onSubmit={handleSubmitss}>
              {loginSucess == 0 ? (
                <h2 className="text-red-600 ml-8">
                  Enter correct Email & password
                </h2>
              ) : null}
              <label>
                <h4 className="font-bold ml-12">for a quicker checkout</h4>
              </label>
              <div className="w-full m-auto">
                <div className="w-11/12 m-auto">
                  <input
                    className="w-full h-10 border border-black"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-red-500">{formErrors.email}</p>
                <div className="w-11/12 m-auto">
                  <input
                    className="w-full h-10 border border-black"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-red-500">{formErrors.password}</p>
                <button
                  className="w-11/12 py-2 border border-pink-600 bg-pink-600 font-bold text-white"
                  style={{ marginLeft: "18px" }}
                >
                  {loginSucess > 0 ? setLoginBtn(false) : null}CONTINUE
                </button>
              </div>
            </form>
            <div className="w-full justify-center ml-16 mt-4">
              <h5 className="inline-block ml-28">Or continue with</h5>
            </div>
            <div className="w-full flex justify-evenly mt-4">
              <div className="w-5/12">
                <img
                  className="cursor-pointer"
                  src="https://www.faballey.com/images/loginfb.png"
                  alt=""
                />
              </div>
              <div className="w-5/12">
                <img
                  className="cursor-pointer"
                  src="https://www.faballey.com/images/logingogl.png"
                  alt="google"
                />
              </div>
            </div>
            <h5
              className="inline-block ml-52 mt-6 cursor-pointer"
              onClick={() => setLoginBtn(false)}
            >
              skip
            </h5>
          </div>
        </div>
      ) : null}
    </>
  );
};

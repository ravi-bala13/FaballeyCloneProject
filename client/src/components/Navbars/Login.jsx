import React from "react";
import { Modal } from "antd";
import { loadingGif } from "../../utils/Constants";

export default function Login({
  isLoading,
  setLoginBtn,
  loginSucess,
  handleSubmitss,
  formValues,
  handleChange,
  formErrors,
}) {
  return (
    <div>
      <div
        className="w-4/12 py-8 m-auto fixed z-50 bg-white flex flex-col p-4"
        style={{
          //   marginLeft: "450px",
          //   marginTop: "50px",
          position: "fixed",
          margin: "auto",
          left: "33%",
          top: "150px",
        }}
      >
        {isLoading ? (
          <img src={loadingGif} />
        ) : (
          <>
            <div className="w-full text-black font-bold text-xl flex justify-between ">
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
            <div className="w-11/12 m-auto">
              {/* login form */}
              <form onSubmit={handleSubmitss}>
                {/* {loginSucess == 0 ? (
              <h2 className="text-red-600 ml-8">
                Enter correct Email & password
              </h2>
            ) : null} */}
                <label>
                  <h4 className="font-bold ml-12">For a quicker checkout</h4>
                </label>
                <div className="w-full m-auto">
                  <div className="w-11/12 m-auto">
                    <input
                      className="w-full h-10 border border-black p-2"
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
                      className="w-full h-10 border border-black p-2"
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
              <div className="w-full justify-center  mt-4  text-center">
                <h5 className="inline-block">Or continue with</h5>
              </div>
              <div className="w-full flex justify-evenly mt-4">
                <div className="w-5/12">
                  <img
                    className="cursor-pointer w-full h-12"
                    src="https://www.faballey.com/images/loginfb.png"
                    alt=""
                  />
                </div>
                <div className="w-5/12">
                  <img
                    className="cursor-pointer w-full  h-12"
                    src="https://www.faballey.com/images/logingogl.png"
                    alt="google"
                  />
                </div>
              </div>
              <div
                className="w-full inline-block cursor-pointer  m-auto text-center"
                onClick={() => setLoginBtn(false)}
              >
                skip
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

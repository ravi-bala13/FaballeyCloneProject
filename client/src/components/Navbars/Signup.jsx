import React from "react";
import { Modal } from "antd";

export default function Signup({
  formValues,
  handleChange,
  formErrors,
  isModalVisible,
  handleSubmit,
  handleCancel,
  handleOk,
  setIsModalVisible,
}) {
  return (
    <div>
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
    </div>
  );
}

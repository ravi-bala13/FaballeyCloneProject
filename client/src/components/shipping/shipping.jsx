import { useEffect } from "react";
import { useState } from "react";

export const Shipping = () => {
  const [form, setForm] = useState([]);
  const [cart, setCart] = useState([]);
  let id = "61ecefc76b66d6705191455e";
  let sum = 0;

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const response = await fetch(`https://cryptic-oasis-92145.herokuapp.com/users/${id}`);
    let data = await response.json();
    // console.log("data:", data);
    setCart(data.cartItems);
  };

  cart.map((e) => {
    sum = sum + e.price;
  });
  console.log("sum", sum);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const final_data = { form, sum, cart_length: cart.length };
    console.log("final_data", final_data);

    localStorage.setItem("shipping", JSON.stringify(final_data));

    window.location.href = "/payment";

  };

  return (
    <div>
      <div className="flex mt-5 mx-auto w-9/12 p-2">
        <div className="w-7/12">
          <p className="text-slate-700 text-xl">
            Where do you want us to deliver?
          </p>
          <div>
            <div className="border border-gray-300 p-4">
              <div className="flex">
                <div className="flex-1 mr-2">
                  <label className="font-semibold">Full name*</label>
                  <br />
                  <input
                    type="text"
                    placeholder="enter name"
                    className="border border-gray-300 rounded-sm w-full p-2"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label className="font-semibold">Mobile Number*</label>
                  <br />
                  <input
                    type="text"
                    className="border border-gray-300 rounded-sm w-full p-2"
                    name="number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* second div */}
              <div className="flex">
                <div className="flex-1 mr-2">
                  <label className="font-semibold">country*</label>
                  <br />
                  <select
                    className="border border-gray-300 w-full p-2"
                    name="country"
                    onChange={handleChange}
                  >
                    <option value=""> Select Country </option>
                    <option value="7">Australia</option>
                    <option value="13">Belgium</option>
                    <option value="3">Canada</option>
                    <option value="22">China</option>
                    <option value="92">Fiji</option>
                    <option value="34">France</option>
                    <option value="36">Germany</option>
                    <option value="38">Greece</option>
                    <option value="93">Guyana</option>
                    <option value="40">Hong Kong</option>
                    <option value="41">Hungary</option>
                    <option value="1">India</option>
                    <option value="42">Indonesia</option>
                    <option value="43">Ireland</option>
                    <option value="45">Italy</option>
                    <option value="47">Japan</option>
                    <option value="51">Kuwait</option>
                    <option value="52">Malaysia</option>
                    <option value="87">Mauritius</option>
                    <option value="90">Nepal</option>
                    <option value="54">Netherlands</option>
                    <option value="55">New Zealand</option>
                    <option value="89">Nigeria</option>
                    <option value="60">Philippines</option>
                    <option value="67">Saudi Arabia</option>
                    <option value="88">Scotland</option>
                    <option value="68">Singapore</option>
                    <option value="71">South Africa</option>
                    <option value="72">Spain</option>
                    <option value="91">Sri Lanka</option>
                    <option value="73">Sweden</option>
                    <option value="74">Switzerland</option>
                    <option value="76">Thailand</option>
                    <option value="94">Trinidad and Tobago</option>
                    <option value="79">United Arab Emirates</option>
                    <option value="80">United Kingdom</option>
                    <option value="2">United States</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="font-semibold">Pincode*</label>
                  <br />
                  <input
                    type="text"
                    className="border border-gray-300 rounded-sm w-full p-2"
                    name="pincode"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* third div */}
              <div>
                <label className="font-semibold">Address*</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm w-full h-24"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              {/* fourth div */}
              <div className="my-3">
                <input type="checkbox"></input>
                <label className="text-slate-500 ml-2">
                  Make this my default address
                </label>
              </div>
              {/* submit input */}
              <div className="my-4">
                <input
                  type="submit"
                  className="w-1/2 h-12 rounded-sm text-white bg-rose-400 hover:bg-rose-600"
                  value="Deliver to this address"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        {/* second half */}
        <div className="w-5/12 ml-6">
          <div className="flex justify-between">
            <p className="text-slate-700 text-xl">Product Details</p>
            <button className="text-pink-500">Edit bag</button>
          </div>
          {/* product details */}
          <div
            className={
              cart.length < 4 ? "rounded-sm" : "rounded-sm overflow-scroll "
            }
          >
            {cart.map((e, i) => (
              <div key={i}>
                <div className="flex mb-1">
                  <div className="w-1/6 mr-2">
                    <img src={e.image} className="w-full" alt="" />
                  </div>
                  <div className="text-xs">
                    <p className="m-0">{e.productName}</p>
                    <p className="m-0">Category: {e.category} </p>
                    <p className="m-0">Price: {e.price} </p>
                  </div>
                </div>
                <hr className="mb-1"></hr>
              </div>
            ))}
          </div>
          {/* price details */}
          <div>
            <p className="text-slate-700 text-xl">Price Details</p>
          </div>
          <div className="rounded-sm bg-gray-100 p-4">
            <div className="flex justify-between">
              <p className="text-slate-700">Sub Total:</p>
              <p>₹ {sum}</p>
            </div>
            <hr></hr>
            <div className="flex justify-between">
              <p className="text-pink-500">Total:</p>
              <p className="text-pink-500">₹ {sum}</p>
            </div>
            <hr></hr>
          </div>
          <div className="border border-slate-300 p-2 mt-4">
            <p className="text-xs">Estimated Delivery Time</p>
            <p className="text-xs mb-0">
              India : 4-6 business days. <br></br>International: 7-12 business
              days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

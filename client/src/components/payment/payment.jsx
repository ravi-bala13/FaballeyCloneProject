export const Payment = () => {
  let data;
  const get_data = () => {
    data = JSON.parse(localStorage.getItem("shipping"));
    console.log("its data", data);
  };
  get_data();

  const payNow = () => {
    setTimeout(function () {
      alert("Congratulations! your payment is successfully paid");
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div>
      <div id="content_box" className="flex mt-5 mx-auto w-8/12 p-2">
        {/* part first */}
        <div className="w-1/2 mr-6">
          <p className="text-slate-700 text-xl">Fill Payment Details</p>
          <div className="border border-gray-300 ">
            <div className="py-2 px-4 mb-0 font-medium border-b border-gray-300 text-l text-slate-700">
              <p>CREDIT / DEBIT CARD</p>
            </div>
            <div className="p-4 flex flex-col">
              <input
                type="text"
                className="border border-gray-300 rounded-sm w-full p-2 mt-3 mb-6"
                placeholder="XXXX XXXX XXXX XXXX"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                className="border border-gray-300 rounded-sm w-full p-2 mb-6"
              />
              <div className="mb-6">
                <span>
                  <input
                    type="text"
                    placeholder="MM"
                    className="border border-gray-300 rounded-sm  p-2 w-1/4 mr-2"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="YY"
                    className="border border-gray-300 rounded-sm p-2 w-1/4 mr-2"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border border-gray-300 rounded-sm p-2 w-1/4 mr-2"
                  />
                </span>
              </div>
              <button
                onClick={payNow}
                className="bg-pink-300 rounded-sm w-full p-2 mb-2"
              >
                PAY NOW
              </button>
            </div>
          </div>
          <div className="mt-4">
            <img src="https://static.faballey.com/images/patmentimg.png?v=11.4" />
          </div>
        </div>
        {/* second part */}
        <div className="w-1/2">
          <div className="text-slate-700 text-xl">
            <p>{data.cart_length} products in Bag</p>
          </div>
          {/* payment detail box */}
          <div className="bg-gray-100 rounded-sm p-4">
            <div className="flex justify-between mb-0">
              <p>Sub Total</p>
              <p>₹ {data.sum}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>₹ 50</p>
            </div>
            <hr></hr>
            <div className="flex justify-between text-pink-400 mt-2">
              <p>Total Payable</p>
              <p>₹ {data.sum + 50}</p>
            </div>
            <hr></hr>
          </div>

          {/* address details */}
          <div className="mt-4">
            <div className="text-slate-700 text-xl">
              <p>Deliver To</p>
            </div>
            <div className="border border-gray-300 p-3 text-xs">
              <p>
                {data.form.name} <br></br>
                {data.form.address} <br></br>
                Pincode: {data.form.pincode} <br></br>
                Mobile: <b>{data.form.number}</b>
              </p>
            </div>
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

import React from "react";

const AddExpense = () => {
  return (
    <div className="bg-[#F2F3F5] h-full w-full p-10 ">
      <div className="flex flex-col gap-3 bg-white shadow-xl p-10 rounded-lg items-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">
          Add New Expense
        </div>
        <form
          action=""
          className="flex flex-col gap-3 items-center justify-center  w-100"
        >
          <label htmlFor="amount">Amount (₹)</label>
          <input
            className="p-2 border-1 rounded-xl w-full cursor-pointer"
            type="text"
            placeholder="Enter amount"
          />
          <label htmlFor="category">Category </label>
          <select className="p-2 border-1 rounded-xl w-full cursor-pointer">
            <option value="someOption">Some option</option>
            <option value="otherOption">Other option</option>
          </select>
          {/* <input
            className="p-2 border-1 rounded-xl w-full cursor-pointer"
            type="dropdown"
            placeholder="Select category"
          /> */}
          <label htmlFor="date">Date</label>
          <input
            className="p-2 border-1 rounded-xl w-full cursor-pointer"
            type="date"
            placeholder="dd/mm/yy"
          />
          <label htmlFor="note">Note (Optional)</label>
          <textarea
            className="p-2 border-1 rounded-xl w-full cursor-pointer"
            placeholder="Enter amount"
          />
          <div className="bg-blue-800 w-full text-white p-2 rounded-lg font-semibold text-xl mt-2 cursor-pointer">
            submit
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;

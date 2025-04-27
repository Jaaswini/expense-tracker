import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 bg-[#F2F3F5] shadow-xl rounded-lg w-140">
      <div className="flex gap-10 justify-between items-center bg-blue-600 w-full p-2 text-white font-semibold overflow-hidden rounded-t-md">
        <div className="text-3xl">Expense Tracker</div>
        <div
          onClick={() => navigate("/add-expense")}
          className="border-1 p-2 rounded-lg text-white cursor-pointer"
        >
          Add Expense
        </div>
      </div>
      <div>
        {[
          { type: "Total balance", amount: "12000", color: "red" },
          { type: "Total balance", amount: "12000", color: "blue" },
          { type: "Total balance", amount: "12000", color: "green" },
        ].map((item) => (
          <div className="bg-white m-2 p-5 rounded-lg font-medium text-xl">
            {item.type}
            <br></br>
            <span className="text-2xl" style={{ color: item.color }}>
              ₹ {item.amount} /-
            </span>
          </div>
        ))}
      </div>
      <div>
        <div className="font-bold text-xl">Recent Transactions</div>
        <div className="bg-white m-2 p-5 rounded-lg flex flex-col gap-3">
          {[
            { type: "Total balance", amount: "12000", color: "red" },
            { type: "Total balance", amount: "12000", color: "blue" },
            { type: "Total balance", amount: "12000", color: "orange" },
          ].map((item) => (
            <div className=" flex justify-between font-medium">
              <div>{item.type}</div>
              <div style={{ color: item.color }}>₹ {item.amount} /-</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

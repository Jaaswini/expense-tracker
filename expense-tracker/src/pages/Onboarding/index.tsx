import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 
const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F3F5] h-full w-full p-10 ">
      <div className="flex flex-col gap-3 bg-white shadow-xl p-10 rounded-lg items-center">
        <div className="text-4xl font-bold">ExpenseTracker</div>
        <div className="text-grey-200 text-[#666]">
          Track, Manage, and Analyze Your Expenses
        </div>
        <div className="text-sm text-[#888]">
          Stay in control of your finances with simple, powerful expense
          tracking.
        </div>
        <div
          onClick={() => navigate("/login")}
          className="cursor-pointer bg-blue-600 w-1/2 text-center rounded-lg py-3 text-white font-semibold text-lg  transition-all duration-200  ease-in hover:bg-blue-700 "
        >
          Get Started
        </div>
        <div
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer transition-all duration-200 ease-in underline hover:border-1 hover:border-blue w-1/2 rounded-lg py-3 "
        >
          Skip
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

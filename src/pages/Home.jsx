import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl w-full text-center underline underline-offset-8 mb-6">
        Learning react-router-dom-v6
      </h1>
      <button
        type="submit"
        className="bg-sky-400 mx-4 p-2 font-semibold text-lg"
        onClick={() => navigate("/order-summary")}
      >
        Place Order
      </button>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl w-3/6 my-2 py-2 text-center rounded-full font-bold hover:text-slate-900 hover:bg-purple-400 bg-purple-300 mx-auto mb-6">
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

import { useEffect } from "react";
import axios from "../utils/axios"; // Importing the axios instance from utils

const Home = () => {
  // Using axios to fetch a product from the fake store API
  // This is an example of how to use axios for making HTTP requests

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }

    // Fetching a product from the fake store API
    // This is an example of how to use the fetch API for making HTTP requests

    // fetch("https://fakestoreapi.com/products/1")
    // .then((response) => response.json()) // Parse the JSON response
    // .then((data) => console.log(data)) // Log the product data
    // .catch((error) => console.error("Error fetching product:", error));  // Handle any errors that occur during the fetch
  };

  useEffect(() => {
    // Automatically fetch the product when the component mounts
    getProduct();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="w-full h-100 p-10">
      <h1 className="text-4xl font-bold">
        Welcome to the Home Page
        <span className="text-blue-500">!</span>
        <small className="block text-sm">
          you got products of{" "}
          <span className="text-blue-500">Fake Store API</span> on console.
        </small>
        <button
          onClick={getProduct}
          className="block mt-5 bg-emerald-400 font-medium  border active:scale-95 cursor-pointer text-black text-2xl px-4 py-2 rounded"
        >
          get Product
        </button>
      </h1>
    </div>
  );
};

export default Home;

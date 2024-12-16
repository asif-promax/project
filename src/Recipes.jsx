import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux"; // Import Redux hooks
import { favorite } from "./redux/cartSlice"; // Import favorite action
import "./Recipes.css";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [find, setfind] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setData(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const findData = data.filter(({ name }) =>
    name.toLowerCase().includes(find.toLowerCase())
  );

  const handleFavorite = (recipe) => {
    dispatch(favorite(recipe)); // Dispatch the favorite action
  };

  return (
    <div>
      <div className="first min-h-screen pt-4 gap-3 bg-cover bg-center flex  items-start justify-center">
        <input
          type="text"
          value={find}
          onChange={(event) => setfind(event.target.value)}
          placeholder="Search Recipes"
          className="w-3/4 rounded-lg  bg-transparent shadow-sm shadow-white border-none ps-3 py-3 text-gray-50"
        />
        <Link to="/Addfav">
          <div className="text-white">
            <FaCartPlus size={40}/>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {findData.length ? (
          findData.slice(0, 10).map(({ id, name, image, rating }) => (
            <div key={id} className="rounded-md shadow-lg bg-slate-400 p-3">
              <img src={image} alt="" className="rounded-t-md" />
              <h1>{name}</h1>
              <h4>Rating: {rating}</h4>
              <button
                className="py-1 px-3 rounded-md bg-slate-300 hover:bg-slate-200"
                onClick={() => handleFavorite({ id, name, image, rating })} 
              >
                AddToFav
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-slate-800">
            Search element is empty
          </p>
        )}
      </div>
    </div>
  );
};

export default Recipes;

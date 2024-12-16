import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./cartSlice";

const Addfav = () => {
  const fav = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleremove=(id)=>{
    dispatch(removeFav({id}))
  }
  return (
    <div>
      <h1 className="text-center text-2xl my-4">Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {fav.length > 0 ? (
          fav.map(({ id, name, image, rating }) => (
            <div key={id} className="rounded-md shadow-lg bg-slate-500 p-3">
              <img src={image} alt={name} className="rounded-t-md" />
              <h1>{name}</h1>
              <h4>Rating: {rating}</h4>
              <button
                className="py-1 px-3 rounded-md bg-slate-300 hover:bg-slate-200"
                onClick={()=>handleremove(id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-slate-800">
            No favorite recipes yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Addfav;

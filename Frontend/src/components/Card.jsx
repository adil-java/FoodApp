import React, { useState, useEffect } from "react";
import { useCart, useDispatch } from "../context/contextReducer";

function Card({ options,foodData}) {
  let dispatch=useDispatch()
  let data = useCart();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(options[0]?.half|| options[0]?.
    regular); 
  const [total, setTotal] = useState(0);
  const handleCart = async () => {
    await dispatch({
      type: "ADD",
      id: foodData._id,
      img: foodData.img,
      name: foodData.name,
      price: price,
      qty: quantity,
    
    });

      console.log(data)
  
  };
  const priceOpt = Object.keys(options[0]); 
  
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  
  const handleOptionChange = (event) => {
    const option = event.target.value; 
    setPrice(options[0]?.[option]);  
  };

  
  useEffect(() => {
    setTotal(price * quantity)
  }, [price, quantity]);

  return (
    <div key={foodData._id} className="card border-2 border-red-500  " style={{ width: "17rem", maxHeight: "380px", background:"##374151" }}>
      <img src={foodData.img}  alt="Card image" style={{height:"150px",objectFit:"cover"}}/>
      <div className="card-body">
        <h5 className="card-title text-md">{foodData.name}</h5>
        <p className="card-text text-[12px]  text-slate-300">{foodData.
description}</p>
      </div>

      <div className="container btn w-80">
        <button
          onClick={increment}
          className="bg-red-600 text-white h-5 w-5 text-center rounded"
          disabled={quantity === 6}
        >
          +
        </button>

        <span className="p-1">{quantity}</span>

        <button
          onClick={decrement}
          className="bg-red-600 text-white h-5 w-5 text-center rounded"
          disabled={quantity === 0}
        >
          -
        </button>

        <select
          onChange={handleOptionChange}
          className="  bg-slate-600 rounded-t"
        >
          {priceOpt.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)
            
              } 
            </option>
          ))}
        </select>


      </div>
        
        <div className=" text-center text-md gap-2">Total Price: ${total}{" "}
      <div onClick={handleCart} className="btn bg-black text-center btn-danger md-1 ">Add to Cart</div>
          </div> 
    </div>
  );
}

export default Card;

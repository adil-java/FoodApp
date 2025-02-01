import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import axios from "axios";
export default function Home() {
  const [foodData, setData] = useState([]);
  const [cat, setCat] = useState([]);

  const [search,setSearch]= useState("")
  const fetchData = async () => {
    const response = await axios.post("http://localhost:8000/api/data");
    setData(response.data[0]); // Assuming response.data[0] is food data
    setCat(response.data[1]);  // Assuming response.data[1] is category data
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Carousal />
      </div>

      <div className=" flex items-center justify-center ">
        <div  style={{"width":"650px"}}>

        <form className=" flex" >
        
        <input
          type="search"
          id="form1"
          placeholder="Search"
          className="form-control"
          onChange={(e)=> setSearch(e.target.value)}
        />
        
      
      <button
        type="submit"
        className="btn btn-primary bg-orange-600"
        
      >
        Search
      </button>
    </form>
    </div>

      </div>
      
 
      <div className="container">
        {cat.length > 0 ? (
          cat.map((category) => (
            <div key={category._id}>
              <h3>{category.CategoryName}</h3> 
              <hr />
              <div className="p-3 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {foodData.length > 0 ? (
                  foodData.filter((items)=> (items.CategoryName === category.CategoryName)&& items.CategoryName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  .map((food, index) => (
                    <Card
               
                     foodData ={food}
                      options={food.options}
                      
                    />
                  ))
                ) : (
                  <p>Loading...</p> // Show a loading message while data is being fetched
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

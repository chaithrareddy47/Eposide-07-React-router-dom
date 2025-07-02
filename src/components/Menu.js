import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { SWIGGY_URL } from "../utils/Data";

const Menu = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [allClear, setAllClear] = useState([]);
  const [search, setSearch] = useState("");

  // fetching data using useeffect hookl
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const jsonData = await data.json();
    console.log(jsonData);

    const getData = jsonData?.data?.cards?.find(
      (data) => data?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(getData);

    const restaurants =
      getData?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(restaurants);

    setAllRestaurants(restaurants);
    setFilteredRes(restaurants);
  };

  function handleRatings() {
    console.log("btn clicked");
    const topRatings = allRestaurants.filter(
      (data) => data.info.avgRating > 4.5
    );
    console.log(topRatings);

    setFilteredRes(topRatings);
  }

  function handleClearBtn() {
    console.log("clicked");
    setFilteredRes(allRestaurants);
    setSearch("");
  }

  function handleSearch(e) {
    const value = e.target.value;
    console.log(value);
    setSearch(value);

    if (value === "") {
      setFilteredRes(allRestaurants);
    } else {
      const filteredSearch = allRestaurants.filter((data) =>
        data.info.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filteredSearch);
      setFilteredRes(filteredSearch);
    }
  }

  return (
    <div className="menu-container">
      <div className="search-bar">
        <div className="input-wrapper">
          <input
            type="text"
            className="input"
            value={search}
            onChange={handleSearch}
          />
          <span className="search-icon">
            <button>🔍</button>
          </span>
        </div>
        <button onClick={handleRatings}>Ratings 4+</button>
        <button onClick={handleClearBtn}>Clear</button>
      </div>

      <div className="res-card">
        {filteredRes.length === 0 ? (
          <h2>No restaurants found.</h2>
        ) : (
          filteredRes.map((data) => (
            <RestroCard key={data.info.id} resData={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;

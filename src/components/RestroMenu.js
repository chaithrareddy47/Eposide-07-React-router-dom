import { useEffect, useState } from "react";
import { getMenuApi } from "../utils/Data";

import { useParams } from "react-router-dom";
const RestroMenu = () => {
    const [menu, setMenu] = useState({});
    
       // getting the restaurd id 
       const { resId } = useParams();
       console.log(resId);
    
  useEffect(() => {
    fetchMenuData()
  }, []);

  const fetchMenuData = async () => {
      const data = await fetch(getMenuApi+resId);
   
      
    const response = await data.json();
    console.log(response);

    const resInfo = response?.data?.cards?.find(
      (data) =>
        data?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    console.log(resInfo);

    const menuData = resInfo?.card?.card?.info;
    console.log(menuData);

    setMenu(menuData);
  };

  return (
    <div>
      <h3>{menu?.name}</h3>
    </div>
  );
};

export default RestroMenu;

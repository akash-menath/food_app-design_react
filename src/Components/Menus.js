import React, { useState, useEffect } from "react";
import Hero from './Hero'
import FilterdDishes from "./FilterdDishes";
import SpacialDishes from "./SpacialDishes";

function Menus() {
  let [menu, setMenu] = useState([]);
  let [Categgory,setCategory]=useState([])
  let [loading,setLoading]=useState(true)
  ////
  async function getAllTheMenu() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals)
    setLoading(false)
  }
  async function getAllTheCategoryMenu() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let CategoryData = await response.json();

    setCategory(CategoryData.categories)
    setLoading(false)
    
  }
  ////
  useEffect(() => {
    getAllTheMenu();
    getAllTheCategoryMenu()
  }, []);

  ////
//  const MenuImage= menu.map((item)=>{
// return(
//     <div>
//         <img src="{item.strMealThumb}" alt="" />
//     </div>
// )
//   })
  return (
    <div>
      {/* {MenuImage} */}
      <Hero/>
    {!loading ? <SpacialDishes spacialMenu={menu}/> :<div className="loader"><h1>loading.....</h1></div>}  
    {!loading ? <FilterdDishes category={Categgory} menu={menu}/> :<h2>loading....</h2>}  
      
    </div>
  );
}
export default Menus;

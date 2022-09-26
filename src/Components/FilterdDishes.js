import React, { useState } from "react";

function FilterdDishes(props) {
  // let [allmenus, setAllMenus] = useState(props.menu);
  let [filterdDishes,setFilterdDishes]=useState([])
 
// console.log(allmenus);
/////
  function passCategory(category) {

 let filterdDishesAre=props.menu.filter((item) => {
      return item.strCategory=== category
    }).map((obj)=>{
    
    return (
        <li>
            <img src={obj.strMealThumb} alt="" />
            <h2>{obj.strMeal}</h2>
        </li>
    )
    })
   
    setFilterdDishes(filterdDishesAre)
  }
  
////////
  let Category = props.category.map((data, index) => {
    return (
      <li
        onClick={() => {
          passCategory(data.strCategory);
        }}>
        {data.strCategory}
      </li>
    );
  });

//////////
  return (
    <div className="filtred-dishes">
      <div className="=container">
        <div className="text-center">
          <h2>choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis fuga
            praesentium itaque. Illum unde omnis eius numquam blanditiis,
            architecto earum?
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{Category}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {filterdDishes}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterdDishes;

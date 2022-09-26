function SpacialDishes(props) {
  
    let maxSpacialDishes=12
  let spacialMenus = props.spacialMenu.map((menuItem,index) => {
    if(index<maxSpacialDishes){
        return (
            <li>
              <img src={menuItem.strMealThumb} alt="" className="br-10" />
              <h4>{menuItem.strMeal}</h4>
            </li>
          );
    }
  
  });
  return (
    <section className="special-dishes">
      <div className="container">
        <div className="spacial-dishes-content text-center">
          <h2>our SpacialDishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tenetur reiciendis sed, dolore aliquam eveniet soluta amet obcaecati
            cum. Maxime sint magni quam nulla ducimus?
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{spacialMenus}</ul>
        </div>
      </div>
    </section>
  );
}
export default SpacialDishes;

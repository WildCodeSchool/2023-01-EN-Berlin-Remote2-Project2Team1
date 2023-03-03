function Cocktail({ data }) {
  return (
    <div className="season__coctails--card">
      <p className="season__coctails--card--name">sex on the beach</p>
      <img src="./assest/coctail2.jpg" alt="picture of random coctail" />
      <div className="season__coctails--card--ingredients">
        <p className="ingredients__title">ingredients</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          perferendis.
        </p>
      </div>
      <div className="season__coctails--card--instructions">
        <p className="instructions__title">instructions</p>
        <p>
          { data.strInstructions }
        </p>
      </div>
    </div>
  );
}

export default Cocktail;
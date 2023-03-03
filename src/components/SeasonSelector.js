function SeasonSelector({preference, setter}) {
  return (
    <div className="season__coctails">
      <div className="season__coctails--title">
        <h4>choose your cocktail by season</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          incidunt.
        </p>
      </div>
      <div className="season__coctails--icon">
        <img src="./assest/winter-icon.png" alt=""
          onClick={ () => { setter("winter") } } />
        <img src="./assest/spring-icon.png" alt="" />
        <img src="./assest/summer-icon.png" alt="" />
        <img src="./assest/autumn-icon.png" alt="" />
      </div>
    </div>
  );
}

export default SeasonSelector;
import SeasonItem from "./SeasonItems";
import winter from "../coctailsData";
import { summer as summer } from "../coctailsData";
import { useEffect, useState } from "react";

const SeasonCoctails = () => {
  const [apiData, setApiData] = useState(winter);
  const [apiCall, setApiCall1] = useState([]);

  const apiCal = async function () {
    const API_URL = " https://coctailapi.onrender.com/";

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data.drinks);
      setApiCall1(data.drinks);
    } catch (error) {
      console.log(`someting happen ${error}`);
    }
  };

  useEffect(() => {
    apiCal();
  }, []);

  // click handler just for testing !!
  const test = () => {
    setApiData(summer);
  };
  const test1 = () => {
    setApiData(winter);
  };

  return (
    <section className="season__coctails--header">
      <div className="season__coctails">
        <div className="season__coctails--title">
          <h4>choose your cocktail by season</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            incidunt.
          </p>
        </div>

        <div className="season__coctails--icon">
          <img onClick={test1} src="./assets/winter-icon.png" alt="" />
          <img onClick={test} src="./assets/spring-icon.png" alt="" />
          <img src="./assets/summer-icon.png" alt="" />
          <img src="./assets/autumn-icon.png" alt="" />
        </div>
      </div>

      <div className="season__coctails--cards">
        {apiData.map((winter, i) => {
          return (
            <SeasonItem
              key={i}
              name={winter.name}
              image={winter.image}
              ingredients={winter.ingredients}
              instuction={winter.instuction}
            />
          );
        })}
      </div>

      {/* TEST VERSION */}
      <div className="season__coctails--cards">
        {apiCall.map((winter, i) => {
          return (
            <SeasonItem
              key={i}
              name={winter.name}
              image={winter.image}
              ingredients={winter.ingredients.Ingredients5}
              instuction={winter.instructions}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SeasonCoctails;

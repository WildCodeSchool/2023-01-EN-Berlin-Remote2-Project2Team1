import SeasonSelector from "./SeasonSelector";
import Cocktail from "./Cocktail";
import { useState } from "react";
import randomCocktail from "../api/randomCocktail";

function App() {
  // this state is a string that has the following possible values:
  // "summer", "winter", "autumn", and "spring"
  let [seasonPreference, setSeasonPreference] = useState("summer");

  return (
    <div>
      <header>
        <div className="left">
          <nav>
            <ul className="navList">
              <li className="navLink">
                <a href="#">Home</a>
              </li>
              <li className="navLink">
                <a href="#">About</a>
              </li>
              <li>
                <img className="logo" src="./assest/logo.png" alt="" />
              </li>
              <li className="navLink">
                <a href="#">Contact</a>
              </li>
              <li className="navLink">
                <a href="#">Search</a>
              </li>
            </ul>
          </nav>
          <div className="hero">
            <p className="heroText__Title">Signature Sips</p>
            <p className="heroText__underTitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, tempore.
            </p>
            <p className="hero__btn">search</p>
          </div>
        </div>
        <div className="heroRight">
          <img src="../assest/Old Fashioned—Studio Bon.jpg" alt="" />
          {/* PopUp btn */}
          <div className="info-PopUp">
            <button className="info-popUp__btn" />
            <div className="popUp hidden">
              <p>Explore more</p>
              <p>$ 50</p>
            </div>
          </div>
        </div>
      </header>
      {/* SECTION UNDER HEADER PICTURE BANNER */}
      <div className="underHeader">
        {/* <div class="banner-coctail">
          <img src="./assest/bottle1.jpg" alt="" />
          <img src="./assest/coctail1.jpg" alt="" />
          <img src="./assest/coctail2.jpg" alt="" />
          <img src="./assest/coctail3.jpg" alt="" />
          <img src="./assest/coctail4.jpg" alt="" />
          <img src="./assest/coctail5.jpg" alt="" />
          <img src="./assest/coctail6.jpg" alt="" />
          <img src="./assest/coctail7.jpg" alt="" />
          <img src="./assest/bottle2" alt="" />
        </div> */}
      </div>
      {/* Section Season */}
      <section className="season__coctails--header">
        <SeasonSelector preference={seasonPreference} setter={setSeasonPreference} />
        <div className="season__coctails--cards">
          <Cocktail data={randomCocktail} />
          <Cocktail data={randomCocktail} />
          <Cocktail data={randomCocktail} />
          <Cocktail data={randomCocktail} />
          {/* <div className="season__coctails--card">
            <p className="season__coctails--card--name">gin tonic</p>
            <img src="./assest/coctail3.jpg" alt="picture of random coctail" />
            <div className="season__coctails--card--ingredients">
              <p className="ingredients__title">ingredients</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, perferendis.
              </p>
            </div>
            <div className="season__coctails--card--instructions">
              <p className="instructions__title">instructions</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, dolor.
              </p>
            </div>
          </div>
          <div className="season__coctails--card">
            <p className="season__coctails--card--name">margarita</p>
            <img src="./assest/coctail4.jpg" alt="picture of random coctail" />
            <div className="season__coctails--card--ingredients">
              <p className="ingredients__title">ingredients</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, perferendis.
              </p>
            </div>
            <div className="season__coctails--card--instructions">
              <p className="instructions__title">instructions</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, dolor.
              </p>
            </div>
          </div>
          <div className="season__coctails--card">
            <p className="season__coctails--card--name">classic daiquiri</p>
            <img src="./assest/coctail6.jpg" alt="picture of random coctail" />
            <div className="season__coctails--card--ingredients">
              <p className="ingredients__title">ingredients</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum, perferendis.
              </p>
            </div>
            <div className="season__coctails--card--instructions">
              <p className="instructions__title">instructions</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, dolor.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
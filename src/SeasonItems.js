import React from 'react';
import { useState } from 'react';
import SeasonArray from './SeasonArray';


function SeasonItem(props) {


  //create a state isFavorite that has the inital value of isFavorite that comes from the propsitemName: "Caesar's Salad",
  /*description: "The original Caesar's Salad recipe",
    foodImage: 'https://bit.ly/2GJFu5W',
    price: 12,
    isFavorite: false,*/

  return (
    <div class="season__coctails--cards">
    <div class="season__coctails--card">
      <p class="season__coctails--card--name">{props.name}</p>
      <img src={props.image} alt="picture of random coctail" />
      <div class="season__coctails--card--ingredients">
        <p class="ingredients__title">ingredients</p>
        <p>
          {props.ingredients}
        </p>
      </div>

      <div class="season__coctails--card--instructions">
        <p class="instructions__title">instructions</p>
        <p>
          {props.recipe}
        </p>
      </div>
    </div>
    </div>);
    };

  export default SeasonItem;
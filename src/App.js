import React from "react";


const App = () => {
    return (
      <div>
        <h1>Wild Restaurant Menu</h1>
        <MenuList foodItems={foodItems} />
        {/* pass the variable foodItems as props to MenuList component */}
      </div>
    );
  };
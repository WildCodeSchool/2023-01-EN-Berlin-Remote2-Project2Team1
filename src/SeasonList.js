

function SeasonList({ SeasonItem }) {
    console.log(foodItems);
    return foodItems.map((props) => (
      <MenuItem
        itemName={props.itemName}
        description={props.description}
        foodImage={props.foodImage}
        price={props.price}
        isFavorite={props.isFavorite}
      />
    ));
  }
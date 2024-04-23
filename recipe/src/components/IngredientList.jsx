import Ingredient from "./Ingredient";

export default function IngredientList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <Ingredient item={item} />
          </div>
        ))
      )}
    </div>
  );
}

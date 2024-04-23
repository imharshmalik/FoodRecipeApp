import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "20d07d521f10492fb0f132c019225740";

  useEffect(() => {
    async function fetchFoodDetails() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFood(data);
      console.log(food);
      setLoading(false);
    }
    fetchFoodDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeTitle}>{food.title}</h1>
        <img
          className={styles.recipeImage}
          src={food.image}
          alt="No image found"
        />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
          </span>
        </div>
        <h2>Ingredients: </h2>
        <IngredientList food={food} isLoading={isLoading} />
        <h2>Instructions:</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading instruction...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

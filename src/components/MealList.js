import { useNavigate } from 'react-router-dom';
import Meal from './Meal';

function MealList({ meals }) {
  const navigate = useNavigate();

  return (
    <>
      <button class="waves-effect waves-light btn" onClick={() => navigate(-1)}>
        <i class="material-icons right">arrow_back</i>Go Back
      </button>
      <div className="list">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}

export default MealList;

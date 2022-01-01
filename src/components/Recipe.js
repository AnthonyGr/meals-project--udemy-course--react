import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <>
          <button class="waves-effect waves-light btn" onClick={() => navigate(-1)}>
            <i class="material-icons right">arrow_back</i>Go Back
          </button>
          <button class="waves-effect waves-light btn" onClick={() => navigate('/')}>
            <i class="material-icons right">home</i>Homepage
          </button>
          <div className="recipe">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h5>Categoty: {recipe.strCategory}</h5>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
            {recipe.strYoutube ? (
              <div className="row">
                <h5 style={{ margin: '2rem 0 1.5rem' }}>Video recipe</h5>
                <iframe
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                  frameborder="0"
                  title={id}
                  allowfullscreen
                />
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}

export default Recipe;

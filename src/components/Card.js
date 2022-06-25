import React from 'react';

const card = ({meal}) => {
    
    return (
        <div className='meal-card'>
            <h2>{meal.strMeal}</h2>
            <p>origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
            <p>{meal.strInstructions}</p>
            

            
        </div>
    );
};

export default card;
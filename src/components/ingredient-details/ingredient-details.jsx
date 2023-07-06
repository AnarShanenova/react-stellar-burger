/* import React from 'react'; */
import ingredientDetailsStyle from "./ingredient-details.module.css";

import PropTypes from "prop-types";
import ingredientsTypes from "../../utils/types";

function IngredientDetails(props) {
  return (
    <section className={ingredientDetailsStyle.root}>
      <img
        src={props.currentIngredient.image_large}
        alt={props.currentIngredient.name}
      />
      <h4 className="text_type_main-medium mb-8 mt-4">
        {props.currentIngredient.name}
      </h4>
      <div className={`${ingredientDetailsStyle.info}`}>
        <div className={`${ingredientDetailsStyle.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Калории,ккал</span>
          <span className="text_type_digits-default">
            {props.currentIngredient.calories}
          </span>
        </div>
        <div className={`${ingredientDetailsStyle.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Белки, г</span>
          <span className="text_type_digits-default">
            {props.currentIngredient.proteins}
          </span>
        </div>
        <div className={`${ingredientDetailsStyle.infoItem} mr-5`}>
          <span className="text_type_main-default mb-2">Жиры, г</span>
          <span className="text_type_digits-default">
            {props.currentIngredient.fat}
          </span>
        </div>
        <div className={`${ingredientDetailsStyle.infoItem}`}>
          <span className="text_type_main-default mb-2">Углеводы, г</span>
          <span className="text_type_digits-default">
            {props.currentIngredient.carbohydrates}
          </span>
        </div>
      </div>
    </section>
  );
}

IngredientDetails.propTypes = {
  currentIngredients: PropTypes.arrayOf(ingredientsTypes),
};

export default IngredientDetails;

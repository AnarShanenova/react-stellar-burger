import React from "react";
import burgerIngredientsStyle from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import PropTypes from "prop-types";
import ingredientsTypes from "../../utils/types";

import BurgerIngredientsSection from "../burger-ingredients-section/burger-ingredients-section";

function BurgerIngredients(props) {
  const tabs = [
    {
      name: "bun",
      title: "Булки",
    },
    {
      name: "sauce",
      title: "Соусы",
    },
    {
      name: "main",
      title: "Начинки",
    },
  ];

  const [current, setCurrent] = React.useState(tabs[0].name);
  const [ingredientVisible, setIngredientVisible] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState({});

  const closeModal = () => {
    setIngredientVisible(false);
  };

  const openIngredientModal = (item) => {
    setCurrentIngredient({ ...item });
    setIngredientVisible(true);
  };

  return (
    <section className={`${burgerIngredientsStyle.root} mr-10`}>
      <h1
        className={`${burgerIngredientsStyle.title} text_type_main-large mb-5 mt-10`}
      >
        Соберите бургер
      </h1>
      <div className={`${burgerIngredientsStyle.tabs} mb-8`}>
        {tabs.map((item) => (
          <Tab
            value={item.name}
            active={current === item.name}
            onClick={setCurrent}
            key={item.name}
          >
            {item.title}
          </Tab>
        ))}
      </div>
      <div className={burgerIngredientsStyle.ingredients}>
        {tabs.map((item) => (
          <BurgerIngredientsSection
            type={item.name}
            key={item.name}
            title={item.title}
            data={props.ingredients.filter((el) => el.type === item.name)}
            openModal={openIngredientModal}
          />
        ))}
      </div>
      {ingredientVisible && (
        <Modal header="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsTypes).isRequired,
};

export default BurgerIngredients;

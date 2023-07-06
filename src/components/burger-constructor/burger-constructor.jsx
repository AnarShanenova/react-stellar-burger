import PropTypes from "prop-types";
import ingredientsTypes from "../../utils/types";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorStyle from "./burger-constructor.module.css";

function BurgerConstructor({ ingredients, openModal }) {
  const toppings = ingredients.filter(
    (item) => item.type === "main" || item.type === "sauce"
  );

  return (
    <section className={`${burgerConstructorStyle.root} mt-25`}>
      <div className={`${burgerConstructorStyle.container} pl-4`}>
        <div className={`${burgerConstructorStyle.item} mb-4 pr-4`}>
          <div className={`${burgerConstructorStyle.iconEmpty}`}></div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price="200"
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
        <div className={`${burgerConstructorStyle.scrollable} mb-4`}>
          {toppings.map((item) => (
            <div className={`${burgerConstructorStyle.item} mb-4`} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
        <div className={`${burgerConstructorStyle.item} mb-4 pr-4`}>
          <div className={`${burgerConstructorStyle.iconEmpty}`}></div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price="200"
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyle.total} mt-10 pr-8`}>
        <span className={`${burgerConstructorStyle.totalSum} mr-10 text_type_digits-medium`}>
          600
          <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsTypes).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;

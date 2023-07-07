import React, { useMemo } from "react";
import PropTypes from "prop-types";
import ingredientsTypes from "../../utils/types";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorStyle from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BUN_TYPE_TOP = "top";
const BUN_TYPE_BOTTOM = "bottom";
const INGREDIENT_TYPES = ["main", "sauce"];

function BurgerConstructor({ ingredients }) {
  const toppings = useMemo(
    () => ingredients.filter((item) => INGREDIENT_TYPES.includes(item.type)),
    [ingredients]
  );

  const [orderVisible, setOrderVisible] = React.useState(false);

  const openModal = () => {
    setOrderVisible(true);
  };

  return (
    <section className={`${burgerConstructorStyle.root} mt-25`}>
      <div className={`${burgerConstructorStyle.container} pl-4`}>
        <div className={`${burgerConstructorStyle.item} mb-4 pr-4`}>
          <div className={`${burgerConstructorStyle.iconEmpty}`}></div>
          <ConstructorElement
            type={BUN_TYPE_TOP}
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price="200"
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
        <div className={`${burgerConstructorStyle.scrollable} mb-4`}>
          {toppings.map((item) => (
            <div
              className={`${burgerConstructorStyle.item} mb-4`}
              key={item._id}
            >
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
            type={BUN_TYPE_BOTTOM}
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price="200"
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyle.total} mt-10 pr-8`}>
        <span
          className={`${burgerConstructorStyle.totalSum} mr-10 text_type_digits-medium`}
        >
          600
          <CurrencyIcon type="primary" />
        </span>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      {orderVisible && (
        <Modal header="" onClose={() => setOrderVisible(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsTypes.isRequired).isRequired,
};

export default BurgerConstructor;

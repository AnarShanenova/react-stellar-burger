import orderDetailsStyle from "./order-details.module.css";

import doneImg from "../../images/done.svg";

function OrderDetails() {
  return (
    <section className={`${orderDetailsStyle.root}`}>
      <span className={`${orderDetailsStyle.title} text_type_digits-large mt-4 mb-8`}>
        034536
      </span>
      <p className={`${orderDetailsStyle.subTitle} text_type_main-medium mb-15`}>
        идентификатор заказа
      </p>
      <img src={doneImg} alt="Заказ принят" className="mb-15" />
      <p className={`${orderDetailsStyle.orderInfo} text_type_main-default mb-2`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${orderDetailsStyle.orderInfo} ${orderDetailsStyle.textColor} text_type_main-default mb-2`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderDetails;

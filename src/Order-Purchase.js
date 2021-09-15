import React from "react";

export function Order(props) {
  const order = props.order;

  return (
    <div className="order">
      <span>{order.amount}</span>
      <span> x </span>
      <span>{order.name}</span>
      <span
        className="minusButton"
        onClick={() => props.subtract(order.name, order.amount, order.cost)}
      >
        &minus;
      </span>
      <span className="plusButton" onClick={() => props.add(order)}>
        &#x2B;
      </span>
      <span
        className="deleteButton"
        onClick={() => props.remove(order.name, order.amount, order.cost)}
      >
        &#x2716;
      </span>
    </div>
  );
}

export function Purchase(props) {
  const purchase = props.purchase;

  return (
    <div className="purchase">
      <span>{purchase.amount}</span>
      <span> x </span>
      <span>{purchase.name}</span>
    </div>
  );
}

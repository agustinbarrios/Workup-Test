import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartPNG from '../../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <i>🍕</i>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartPNG} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Regresa</span>
      </Link>
    </div>
  );
};

export default CartEmpty;

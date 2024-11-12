import { cart } from '../data/cart-class.js';
import {products, loadProducts} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

updateCartQuantity();
import { createSelector } from "reselect";

//InputSelector
const selectCart = state => state.cart;

//Output selector = uses createSelector.

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (currentValue, cartItem) => currentValue + cartItem.quantity,
      0
    )
);

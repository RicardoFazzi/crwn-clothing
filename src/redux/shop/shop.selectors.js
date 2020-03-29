import { createSelector } from "reselect";

export const selectShopData = state => state.shop;

export const selectShopCollections = createSelector(
  selectShopData,
  (shop) => shop.collections
);

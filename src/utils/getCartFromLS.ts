import { calcTotalPrice } from "./calcTotalPrice.ts";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalprice = calcTotalPrice(items);

  return {
    items,
    totalprice,
  };
};

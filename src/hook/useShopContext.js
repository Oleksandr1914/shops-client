import { useContext } from "react";
import { ShopContext } from "../hoc/ShopProvider";

export function useShopContext() {
  return useContext(ShopContext);
}

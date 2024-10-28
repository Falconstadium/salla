"use client";

import { FC } from "react";
import { Product, useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

interface Props {
  product: Product;
}

const BuyingOptions: FC<Props> = ({ product }) => {
  const { updateCart } = useCart();
  const onAddToCartClick = () => {
    updateCart(product, 1);
  };

  return (
    <div className="flex space-x-2 p-2">
      <Button onClick={onAddToCartClick}>Add to Cart</Button>
    </div>
  );
};

export default BuyingOptions;

"use client";

import React, { FC, ReactNode } from "react";
import CartProvider from "../context/CartContext";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;

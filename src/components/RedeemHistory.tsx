import React, {useContext} from "react";
import {useLocation} from "react-router";

import {userContext} from "~/App/App";

import {Product} from "./Products";
import ProductCard from "./ProductCard";

const RedeemHistory = () => {
  const user: Product[] = useLocation().state;

  return <section />;
  //TODO: Redeem History en el LocalStorage
};

export default RedeemHistory;

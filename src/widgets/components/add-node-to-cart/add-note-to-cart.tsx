"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { addNode } from "@/app/store/slices/cart/cart.slice";

import { useRouter } from "@/app/routing";
import useAuth from "@/app/hooks/use-auth";
import { AppRoutes } from "@/src/shared/routes";
import { CartNodeType } from "@/app/store/slices/cart/cart.type";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";

type AddNodeToCartProps = {
  isExpired: boolean;
  node: CartNodeType;
};

const AddNodeToCart: FC<AddNodeToCartProps> = ({ isExpired, node }) => {
  const { isAuth } = useAuth();
  const t = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isDisable, setIsDisable] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof node === "undefined") return;
    setIsDisable(LocalStorageCartService.existInCart(node._id));
  }, []);

  function onHandleClick(): void {
    if (isExpired) return;
    if (!isAuth) {
      router.push(AppRoutes.login);
      return;
    }
    dispatch(addNode(node));
    setIsDisable(true);
  }

  return (
    <Button variant="contained" size="small" onClick={onHandleClick} disabled={isDisable || isExpired}>
      {isDisable ? <CheckBoxIcon /> : <>{isExpired ? t("expired") : t("add_cart")}</>}
    </Button>
  );
};

export default AddNodeToCart;

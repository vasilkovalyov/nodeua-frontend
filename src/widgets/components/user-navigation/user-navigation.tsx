"use client";

import { FC, ReactElement } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Box, List, ListItem, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

import useAuth from "@/app/hooks/use-auth";
import { Link, usePathname } from "@/app/routing";
import useDrawer from "@/src/shared/hooks/use-drawer";
import { useAppSelector } from "@/app/store/store";
import { USER_NAVIGATION } from "./user-navigation.constant";

import "./user-navigation.scss";

const ICONS: Record<string, ReactElement> = {
  HomeOutlinedIcon: <HomeOutlinedIcon />,
  ShoppingCartOutlinedIcon: <ShoppingCartOutlinedIcon />,
  NewspaperOutlinedIcon: <NewspaperOutlinedIcon />,
  ViewInArOutlinedIcon: <ViewInArOutlinedIcon />,
  GroupOutlinedIcon: <GroupOutlinedIcon />
};

const UserNavigation: FC = () => {
  const pathname = usePathname();
  const t = useTranslations();
  const { onCloseDrawer } = useDrawer();
  const { isAuth } = useAuth();
  const cardNodesLength = useAppSelector((store) => store.cart.nodes.length);

  function isDisplayMenuLink(isPublic: boolean): boolean {
    if (!isPublic) return isAuth;
    return isPublic;
  }

  return (
    <Box component="nav" className="navigation">
      <List>
        {USER_NAVIGATION.map(({ path, nameTranslationKey, icon, className, target, isPublic }) => {
          if (!isDisplayMenuLink(isPublic)) return null;
          return (
            <ListItem key={nameTranslationKey} className="navigation__item">
              <Link
                href={path}
                className={cn("navigation__link", { active: pathname === path }, className)}
                onClick={onCloseDrawer}
                target={target}
              >
                <Box component="span">{ICONS[icon]}</Box>
                <Typography variant="caption">{t(nameTranslationKey)}</Typography>
                {nameTranslationKey === "page_name_cart" && cardNodesLength !== 0 ? (
                  <Box className="navigation__badge">{cardNodesLength}</Box>
                ) : null}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default UserNavigation;

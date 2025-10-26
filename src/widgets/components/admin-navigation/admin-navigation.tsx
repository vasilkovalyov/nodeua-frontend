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

import { Link, usePathname } from "@/app/routing";
import useDrawer from "@/src/shared/hooks/use-drawer";
import { AdminNavigationLinkType } from "@/src/shared/types/admin-navigation-link";

import "./admin-navigation.scss";

type AdminNavigationProps = {
  items: AdminNavigationLinkType[];
};

const ICONS: Record<string, ReactElement> = {
  HomeOutlinedIcon: <HomeOutlinedIcon />,
  ShoppingCartOutlinedIcon: <ShoppingCartOutlinedIcon />,
  NewspaperOutlinedIcon: <NewspaperOutlinedIcon />,
  ViewInArOutlinedIcon: <ViewInArOutlinedIcon />,
  GroupOutlinedIcon: <GroupOutlinedIcon />
};

const AdminNavigation: FC<AdminNavigationProps> = ({ items }) => {
  const pathname = usePathname();
  const t = useTranslations();
  const { onCloseDrawer } = useDrawer();

  return (
    <Box component="nav" className="navigation">
      <List>
        {items.map(({ path, nameTranslationKey, icon, className }) => {
          return (
            <ListItem key={nameTranslationKey} className="navigation__item">
              <Link
                href={path}
                className={cn("navigation__link", { active: pathname === path }, className)}
                onClick={onCloseDrawer}
              >
                <Box component="span">{ICONS[icon]}</Box>
                <Typography variant="caption">{t(nameTranslationKey)}</Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AdminNavigation;

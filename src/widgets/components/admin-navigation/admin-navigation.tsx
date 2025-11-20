"use client";

import { FC, ReactElement } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Box, List, ListItem, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HubIcon from "@mui/icons-material/Hub";
import Person2Icon from "@mui/icons-material/Person2";
import InventoryIcon from "@mui/icons-material/Inventory";

import { Link, usePathname } from "@/app/routing";
import { ADMIN_NAVIGATION } from "./admin-navigation.constant";
import useDrawer from "@/src/shared/hooks/use-drawer";

import "./admin-navigation.scss";

const ICONS: Record<string, ReactElement> = {
  HomeOutlinedIcon: <HomeOutlinedIcon />,
  HubIcon: <HubIcon />,
  Person2Icon: <Person2Icon />,
  InventoryIcon: <InventoryIcon />
};

const AdminNavigation: FC = () => {
  const pathname = usePathname();
  const t = useTranslations();
  const { onCloseDrawer } = useDrawer();

  return (
    <Box component="nav" className="navigation">
      <List>
        {ADMIN_NAVIGATION.map(({ path, nameTranslationKey, icon, className }) => {
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

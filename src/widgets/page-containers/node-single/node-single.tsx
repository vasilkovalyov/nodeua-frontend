import { FC, ReactElement } from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import Picture from "@/src/shared/ui/picture/picture";

import PublicIcon from "@mui/icons-material/Public";
import XIcon from "@mui/icons-material/X";
import InfoIcon from "@mui/icons-material/Info";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NodeSingleContainerProps } from "./node-single.type";

type SocialLink = {
  icon: ReactElement;
  path: string;
};

const NodeSingleContainer: FC<NodeSingleContainerProps> = async ({ locale, ...rest }) => {
  const t = await getTranslations({ locale });

  const { name, price, is_active, description, image } = rest;

  const LINKS: SocialLink[] = [
    {
      icon: <PublicIcon />,
      path: description?.site_link || ""
    },
    {
      icon: <XIcon />,
      path: description?.twitter_link || ""
    },
    {
      icon: <InfoIcon />,
      path: description?.guide_link || ""
    },
    {
      icon: <TelegramIcon />,
      path: description?.telegram_link || ""
    },
    {
      icon: <GitHubIcon />,
      path: description?.github_link || ""
    }
  ];

  return (
    <Paper elevation={3} component={Stack} padding="20px" gap="20px">
      <Stack direction="row" alignItems="start" gap="20px" justifyContent="space-between">
        <Typography variant="h1">{name}</Typography>
        {description && <Chip label={description.type} />}
      </Stack>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Stack gap="20px" alignItems="start">
          <Typography>
            {t("price")}: {getFormatedCurrency(price)}
          </Typography>
          {is_active && (
            <AddNodeToCart
              node={{
                ...rest,
                quantity: 1,
                duration: 1
              }}
            />
          )}
        </Stack>
        <Box borderRadius="50%" overflow="hidden">
          <Picture
            image={{
              src: image,
              width: 140,
              height: 140
            }}
            imageAlt={name}
          />
        </Box>
      </Stack>
      <Box maxWidth="600px">{description && <div dangerouslySetInnerHTML={{ __html: description.description }} />}</Box>
      <Stack direction="row" gap="10px">
        {LINKS.map(({ icon, path }) => {
          if (path.length) {
            return (
              <Link key={path} href={path} target="_blank">
                {icon}
              </Link>
            );
          }
        })}
      </Stack>
    </Paper>
  );
};

export default NodeSingleContainer;

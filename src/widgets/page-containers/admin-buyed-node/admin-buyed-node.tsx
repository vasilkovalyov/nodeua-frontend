import { FC } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { getLocale, getTranslations } from "next-intl/server";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";
import { AdminBuyedNodeType } from "./types/admin-buyed-node.type";
import { CopyClipboard } from "../../components";
import { getFormattedNodeFields } from "./admin-buyed-node.utils";
import { DATES_FORMAT } from "@/src/shared/config/dates";

type AdminBuyedNodePageContainerProps = AdminBuyedNodeType;

const AdminBuyedNodePageContainer: FC<AdminBuyedNodePageContainerProps> = async ({
  _id,
  expiration_date,
  node,
  purchase_date,
  user
}) => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <Stack gap="50px">
      <PageTitle title={node.name} />
      <Stack direction="row" gap="20px">
        <Image src={node.image} alt={node.name} width={100} height={100} />
        <Stack>
          <Typography>{t("id_node_label")}</Typography>
          <Typography>{node._id}</Typography>
        </Stack>
      </Stack>

      <Grid container gap="30px">
        <Grid item>
          <Typography>{t("expiration_date_global")}</Typography>
          <Stack direction="row" gap="10px">
            <Typography>{dayjs(expiration_date).format(DATES_FORMAT.dateTextAndTime)}</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Typography>{t("purchase_date_global")}</Typography>
          <Stack direction="row" gap="10px">
            <Typography>{dayjs(purchase_date).format(DATES_FORMAT.dateTextAndTime)}</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" marginBlockEnd="20px">
            {t("node")}
          </Typography>
          <Stack gap="20px">
            {getFormattedNodeFields(node, _id).map(({ titleTranslationKey, value, isClipboard }) => (
              <Box key={titleTranslationKey}>
                <Typography>{t(titleTranslationKey)}</Typography>
                <Stack direction="row" gap="10px">
                  <Typography>{value}</Typography>
                  {isClipboard && <CopyClipboard value={value} />}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" marginBlockEnd="20px">
            {t("user")}
          </Typography>
          <Stack gap="20px">
            <Box>
              <Typography>{t("user_id_global")}</Typography>
              <Stack direction="row" gap="10px">
                <Typography>{user._id}</Typography>
                <CopyClipboard value={user._id} />
              </Stack>
            </Box>
            <Box>
              <Typography>{t("user_email_global")}</Typography>
              <Stack direction="row" gap="10px">
                <Typography>{user.email}</Typography>
                <CopyClipboard value={user.email} />
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AdminBuyedNodePageContainer;

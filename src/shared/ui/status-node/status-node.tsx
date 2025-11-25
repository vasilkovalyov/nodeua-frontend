import { FC } from "react";
import { useTranslations } from "next-intl";

import { Chip } from "@mui/material";

type StatusNodeProps = {
  isActive: boolean;
};

const StatusNode: FC<StatusNodeProps> = ({ isActive }) => {
  const t = useTranslations();

  return <Chip label={isActive ? t("active_global") : t("expired_global")} color={isActive ? "success" : "error"} />;
};

export default StatusNode;

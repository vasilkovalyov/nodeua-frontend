import { FC } from "react";
import { useTranslations } from "next-intl";

import { Alert } from "@mui/material";
import { getFormatedCurrency } from "@/src/shared/config/methods";

type LackBalancePanelProps = {
  balance: number;
};

const LackBalancePanel: FC<LackBalancePanelProps> = ({ balance }) => {
  const t = useTranslations();

  return <Alert severity="error">{t("lack_balance_text", { balance: getFormatedCurrency(balance) })}</Alert>;
};

export default LackBalancePanel;

import { FC } from "react";

import { Button, Stack } from "@mui/material";

type TopUpAmountListProps = {
  selectedAmount: number;
  amountList: number[];
  onChange: (amount: number) => void;
};

const TopUpAmountList: FC<TopUpAmountListProps> = ({ selectedAmount, amountList, onChange }) => {
  return (
    <Stack direction="row" gap="10px">
      {amountList.map((amount) => (
        <Button
          key={amount}
          fullWidth
          size="small"
          variant="contained"
          color={amount === selectedAmount ? "success" : "primary"}
          onClick={() => onChange(amount)}
        >
          {amount}
        </Button>
      ))}
    </Stack>
  );
};

export default TopUpAmountList;

import { FC, ReactElement } from "react";

import { Box, Grid } from "@mui/material";

type BlockCartTemplateProps = {
  leftCol: ReactElement;
  rightCol: ReactElement;
};

const BlockCartTemplate: FC<BlockCartTemplateProps> = ({ leftCol, rightCol }) => {
  return (
    <Grid container spacing="20px">
      <Grid item xs={12} xl={8}>
        {leftCol}
      </Grid>
      <Grid item xs={12} xl={4}>
        <Box component="aside" flex={1} height="100%">
          {rightCol}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlockCartTemplate;

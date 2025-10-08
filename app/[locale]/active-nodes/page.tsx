import { ReactElement } from "react";
import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function ActiveNodesPage(): Promise<ReactElement> {
  return (
    <Box>
      <Typography variant="h1">Active nodes</Typography>
    </Box>
  );
}

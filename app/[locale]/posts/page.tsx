import { ReactElement } from "react";
import type { Metadata } from "next";

import { Box, Typography } from "@mui/material";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function PostsPage(): Promise<ReactElement> {
  return (
    <Box>
      <Typography variant="h1">Posts</Typography>
    </Box>
  );
}

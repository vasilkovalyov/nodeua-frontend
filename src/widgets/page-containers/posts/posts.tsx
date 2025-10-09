import { FC } from "react";
import { Stack } from "@mui/material";
import { PageTitle } from "@/src/shared/ui";

const PostsPageContainer: FC = () => {
  return (
    <Stack gap="20px">
      <PageTitle titleTranslationKey="page_name_posts" />
    </Stack>
  );
};

export default PostsPageContainer;

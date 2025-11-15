import { serverSideFetch } from "@/app/api/server-side-api";
import { LOCALES } from "@/app/constants/languages";
import { LanguageCodesType } from "@/src/shared/types/language";
import { NodesList } from "@/src/widgets/page-containers/home/ui/block-nodes/block-nodes.type";

type LocaleParamsType = {
  locale: LanguageCodesType;
};

type StaticParams = {
  locale: LanguageCodesType;
  id: string;
};

export const dynamic = "force-static";

export async function getStaticParams(): Promise<LocaleParamsType[]> {
  const { success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 300 }
  });

  if (!success) return [];

  const nodesIds: string[] = [];

  for (const key in data) {
    const nodes = data[key as keyof NodesList];

    if (nodes.length) {
      for (const node of nodes) {
        nodesIds.push(node._id);
      }
    }
  }

  const staticParams: StaticParams[] = [];

  for (const locale of LOCALES) {
    for (const nodeId of nodesIds) {
      staticParams.push({
        locale,
        id: nodeId
      });
    }
  }

  return staticParams;
}

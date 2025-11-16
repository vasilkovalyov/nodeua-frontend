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

export function getStaticParams(nodes: NodesList): LocaleParamsType[] {
  const nodesIds: string[] = [];

  for (const key in nodes) {
    const nodesList = nodes[key as keyof NodesList];

    if (nodesList.length) {
      for (const node of nodesList) {
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

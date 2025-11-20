import { NodeSingleType } from "@/app/entities/node";
import { LanguageCodesType } from "@/src/shared/types/language";

export type NodeSingleContainerProps = NodeSingleType & {
  locale: LanguageCodesType;
};

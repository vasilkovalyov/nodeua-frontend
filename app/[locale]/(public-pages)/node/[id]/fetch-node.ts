import { serverSideFetch } from "@/app/api/server-side-api";
import { NodeSingleContainerProps } from "@/src/widgets/page-containers/node-single/node-single.type";

export async function fetchNode(id: string): Promise<NodeSingleContainerProps | null> {
  const { success, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!success) return null;
  return data;
}

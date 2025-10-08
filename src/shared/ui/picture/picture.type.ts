import { DetailedHTMLProps, ImgHTMLAttributes, SourceHTMLAttributes } from "react";

export type PictureProps = {
  className?: string;
  sources?: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>[];
  image: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  imageAlt: string;
};

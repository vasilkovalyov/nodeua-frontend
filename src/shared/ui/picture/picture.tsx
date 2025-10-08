import { FC } from "react";
import cn from "classnames";

import { PictureProps } from "./picture.type";

import "./picture.scss";

const Picture: FC<PictureProps> = ({ className, sources, image, imageAlt }) => {
  return (
    <picture className={cn(className)}>
      {sources && sources?.length && sources.map((source, index) => <source key={index} {...source} />)}
      <img {...image} alt={imageAlt} />
    </picture>
  );
};

export default Picture;

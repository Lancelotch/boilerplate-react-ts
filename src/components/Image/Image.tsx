import React from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: width, height: height }}
      {...rest}
    />
  );
};

export default Image;
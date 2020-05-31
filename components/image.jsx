import * as React from "react";

const Image = ({ src, alt, ...props }) => (
  <img
    src={src}
    alt={alt}
    {...props}
    style={{ ...props.style, backgroundSize: "auto" }}
  />
);

export default Image;

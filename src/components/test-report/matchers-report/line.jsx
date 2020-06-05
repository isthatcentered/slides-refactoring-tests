import React from "react";

const Line = (props) => (
  <div
    {...props}
    style={{ paddingBottom: ".25em", ...props.style }}
  />
);
export default Line;

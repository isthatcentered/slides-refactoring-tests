import React from "react";

const Line = (props) => (
  <div
    {...props}
    style={{ paddingBottom: ".25em", overflowWrap: "break-word",...props.style }}
  />
);
export default Line;

import * as React from "react";

const makeStyleComponent = (styles) => (props) => (
  <div {...props} style={{ ...styles, ...props.style }} />
);

export default makeStyleComponent;

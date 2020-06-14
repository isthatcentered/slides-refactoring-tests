import * as React from "react";

const makeStyleComponent = (styles, El ="div") => (props) => {
  return (
    <El {...props} style={{ ...styles, ...props.style }}/>
  );
};

export default makeStyleComponent;

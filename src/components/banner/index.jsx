import * as React from "react";
import theme from "../../theme";

const Banner = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: "16px",
      left: "16px",
      right: "16px",
      zIndex: "1",
      textAlign: "center",
      padding: ".5em",
      fontSize: "38px",
      background: theme.colors.primaryDark,
      color: "white",
    }}
  >
    {children}
  </div>
);

export default Banner;

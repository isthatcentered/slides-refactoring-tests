import * as React from "react";
import theme from "../../theme";

const Caption = ({ children }) => (
  <div
    style={{
      position: "absolute",
      display: "flex",
      left: 32,
      right: 32,
      bottom: 16,
      justifyContent: "center",
      color: "#d6deeb",
      background: "rgba(10,10,10,0.9)",
      padding: ".5em",
      fontSize: 38,
    }}
  >
    {children}
  </div>
);

const Split = ({ left, right }) => (
  <div
    style={{
      display: "flex",
      position: "fixed",
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
    }}
  >
    <figure
      style={{
        margin: 0,
        width: "50%",
        background: "#1E1E1E",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {left}
      <figcaption>
        <Caption>Before</Caption>
      </figcaption>
    </figure>

    <figure
      style={{
        margin: 0,
        width: "50%",
        display: "flex",
        alignItems: "center",
        background: theme.colors.background,
        position: "relative",
      }}
    >
      {right}
      <figcaption>
        <Caption>After</Caption>
      </figcaption>
    </figure>
  </div>
);

export default Split;

import Slide from "../slide";
import theme from "../../theme";
import * as React from "react";

const Chapter = ({ emojis, title }) => (
  <Slide style={{ flexDirection: "column" }}>
    <span
      style={{
        display: "block",
        fontSize: 320*1.1,
        lineHeight: 1,
        marginBottom: ".15em",
      }}
      aria-hidden={true}
    >
      {emojis}
    </span>
    <h1
      style={{
        fontSize: 150*1.1,
        textAlign:"center",
        margin: 0,
        fontWeight:"bold",
        color: theme.colors.primaryDark,
        lineHeight: 1,
      }}
    >
      {title}
    </h1>
  </Slide>
);

export default Chapter;

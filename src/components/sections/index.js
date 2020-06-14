import * as React from "react";
import makeStyleComponent from "../../make-style-component";
import theme from "../../theme";
import { sections } from "../knowledge";

const Wrapper = makeStyleComponent({
  display: "flex",
  width: "100%",
  height: "100%",
  flexWrap: "wrap",
  // padding: 100,
  maxWidth: 1600,
  // maxHeight: 850,
});

const Cell = ({ active, children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "50%",
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
      opacity: active ? 1 : 0.3,
    }}
  >
    {children}
  </div>
);

const Emoji = ({ children }) => (
  <span
    aria-hidden={true}
    style={{
      fontSize: 220,
      lineHeight: 1,
      display: "block",
      paddingBottom: 32,
    }}
  >
    {children}
  </span>
);

const Title = makeStyleComponent({
  fontWeight: "bold",
  fontSize: 60,
  color: theme.colors.primaryDark,
});

const Sections = ({ active }) => (
  <Wrapper>
    {sections.map(({ emoji, title }, index) => (
      <Cell
        active={active === index || active === undefined}
      >
        <Emoji>{emoji}</Emoji>
        <Title>{title}</Title>
      </Cell>
    ))}
  </Wrapper>
);

export default Sections;

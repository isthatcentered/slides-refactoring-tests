import * as React from "react";
import theme from "../../theme";
import Slide from "../slide";

const Section = ({ title, emoji }) => {
  const Emoji = () => (
    <span
      style={{ fontSize: 128*1.8 }}
      aria-hidden={true}
      children={emoji}
    />
  );
  return (
    <Slide>
      <Emoji />
      <h1
        style={{
          fontSize: 118*1.8,
          fontWeight: "bold",
          color: theme.colors.primaryDark,
          padding: ".5em",
        }}
      >
        {title}
      </h1>
      <Emoji />
    </Slide>
  );
};

export default Section;

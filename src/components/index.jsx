import * as React from "react";

export const Caption = ({ children, ...props }) => (
  <div
    {...props}
    style={{
      borderRadius: 5,
      fontSize: 50,
      fontStyle: "italic",
      textAlign: "center",
      maxWidth: "21em",
      lineHeight: 1.4,
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const Inline = ({ children, ...props }) => (
  <div
    {...props}
    style={{ display: "flex", ...props.style }}
  >
    {children}
  </div>
);

export const Figure = ({ children, caption, ...props }) => (
  <figure {...props}>
    <div style={{ padding: 16, textAlign: "center" }}>
      {children}
    </div>
    {caption && <figcaption>
      <Caption>{caption}</Caption>
    </figcaption>}
  </figure>
);

export const EmojiSlide = ({ children, caption }) => (
  <Figure caption={caption}>
    <div style={{ fontSize: 300 }}>{children}</div>
  </Figure>
);

const Cell = ({ content, legend }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 16,
      textAlign:"center"
    }}
  >
    <div style={{ padding: 0, fontSize: 150 }}>
      {content}
    </div>
    {legend && (
      <div style={{ padding: 0, fontSize: 18, maxWidth:180 }}>
        {legend}
      </div>
    )}
  </div>
);
export const TestsVsDevKnowledgeTable = ({
  dev,
  tests,
  result,
}) => (
  <div>
    <div
      style={{ padding: 20, fontSize: 88, display: "flex" }}
    >
      <Cell
        content={tests}
        legend="What your test Suite knows"
      />
      <Cell content="+" />
      <Cell
        content={dev}
        legend="What you have to focus on"
      />
      <Cell content="=" />
      <Cell content={result} legend="Resulting mood" />
    </div>
  </div>
);

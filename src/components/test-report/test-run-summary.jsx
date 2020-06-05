import React from "react";
import TestStatusIcon from "./test-status-icon";

const getRandomNumber = (min, max) => () =>
  Math.ceil(Math.random() * (max - min) + min);

const getRunTime = getRandomNumber(2, 60)

const RootStyles = (props) => (
  <div
    {...props}
    style={{
      fontFamily: "sans-serif",
      padding: "1em",
      fontSize: 32,
      ...props.style,
    }}
  />
);

const TestSummary = ({ name, passed, ...props }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <TestStatusIcon
      width=".75em"
      height=".75em"
      passed={passed}
      style={{
        marginRight: ".5em",
      }}
    />
    <div style={{ paddingRight: "1em" }}>{name}</div>
    <div
      style={{
        marginLeft: "auto",
        color: "#868687",
      }}
    >
      {getRunTime()} ms
    </div>
  </div>
);

const Cushion = (props) => (
  <div
    {...props}
    style={{ ...props.style, padding: "1em" }}
  />
);

const TestReport = ({
  name,
  success,
  zoom = 1,
  ...props
}) => {
  const isSuccess = !props.children;
  return (
    <RootStyles
      {...props}
      style={{
        fontSize: `${38 * zoom}px`,
        maxWidth: 1350,
        width: "100%",
        ...props.style,
      }}
    >
      <div
        style={{
          borderRadius: ".25em",
          overflow: "hidden",
          boxShadow:
            "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
          background: "white",
        }}
      >
        <Cushion style={{ background: "#f9f9f9" }}>
          <TestSummary name={name} passed={isSuccess} />
        </Cushion>
        {props.children && (
          <Cushion>{props.children}</Cushion>
        )}
      </div>
    </RootStyles>
  );
};
export default TestReport;

import React from "react";
import ExpectationSummary from "./expectation-summary";
import Line from "./line";
import { Expectation, Result } from "./highlights";

export * from "./highlights";
export { ExpectationSummary, Line };

export const RootStyles = (props) => (
  <div
    {...props}
    style={{ color: "#a02323", ...props.style }}
  />
);

export const Value = (props) => (
  <span>{JSON.stringify(props.children)}</span>
);
const CustomMatcherReport = ({
  expected,
  received,
  matcher,
  ...props
}) => (
  <RootStyles>
    <ExpectationSummary
      received={received || "received"}
      expected={expected || "expected"}
      matcher={matcher}
    />
    {props.children({ Line, Value, Result, Expectation })}
  </RootStyles>
);

export const ToHaveLength = ({
  expected,
  actual,
  passed,
}) => (
  <CustomMatcherReport matcher="toHaveLength">
    {({ Line, Expectation, Value, Result }) => (
      <>
        <Line>
          Expected length:{" "}
          <Expectation>
            <Value>{expected}</Value>
          </Expectation>
        </Line>
        <Line>
          Received length:{" "}
          <Result>
            <Value>{actual}</Value>
          </Result>
        </Line>
        <Line>
          Received array:{" "}
          <Result>
            <Value>{passed}</Value>
          </Result>
        </Line>
      </>
    )}
  </CustomMatcherReport>
);

export const ToBe = ({ expected, actual }) => (
  <CustomMatcherReport matcher="toBe">
    {({ Line, Expectation, Value, Result }) => (
      <>
        <Line>
          Expected:{" "}
          <Expectation>
            <Value>{expected}</Value>
          </Expectation>
        </Line>
        <Line>
          Received:{" "}
          <Result>
            <Value>{actual}</Value>
          </Result>
        </Line>
      </>
    )}
  </CustomMatcherReport>
);

export const ToEqual = ({ expected, actual }) => (
  <CustomMatcherReport matcher="toEqual">
    {({ Line, Expectation, Value, Result }) => (
      <>
        <Line>
          Expected:{" "}
          <Expectation>
            <Value>{expected}</Value>
          </Expectation>
        </Line>
        <Line>
          Received:{" "}
          <Result>
            <Value>{actual}</Value>
          </Result>
        </Line>
      </>
    )}
  </CustomMatcherReport>
);

export const ToHaveBeenCalledWith = ({ expected, actual, fnName }) => (
  <CustomMatcherReport matcher="toHaveBeenCalledWith" received={fnName}>
    {({ Line, Expectation, Value, Result }) => (
      <>
        <Line>
          Expected:{" "}
          <Expectation>
            <Value>{expected}</Value>
          </Expectation>
        </Line>
        <Line>
          Received:{" "}
          <Result>
            <Value>{actual}</Value>
          </Result>
        </Line>
      </>
    )}
  </CustomMatcherReport>
);

export const ToBeDisabled = () => (
  <CustomMatcherReport
    received="element"
    expected={" "}
    matcher="toBeDisabled"
  >
    {({ Line, Expectation, Value, Result }) => (
      <>
        <Line>
          <Result>{"<button/>"} is not disabled</Result>
        </Line>
      </>
    )}
  </CustomMatcherReport>
);

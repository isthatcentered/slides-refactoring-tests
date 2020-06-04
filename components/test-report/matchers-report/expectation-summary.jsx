import * as Highlights from "./highlights";
import React from "react";

const ExpectationSummary = ({
  matcher,
  received,
  expected,
  ...props
}) => (
  <div
    {...props}
    style={{ marginBottom: "1em", ...props.style }}
  >
    Error: <Highlights.None>expect(</Highlights.None>
    <Param>
      <Highlights.Expectation>
        {received}
      </Highlights.Expectation>
    </Param>
    <Highlights.None>).</Highlights.None>
    {matcher}
    <Highlights.None>(</Highlights.None>
    {expected && (
      <Param>
        <Highlights.Result>{expected}</Highlights.Result>
      </Param>
    )}
    <Highlights.None>)</Highlights.None>
  </div>
);

const Param = (props) => (
  <span {...props} style={{ padding: "0 .25em" }} />
);
export default ExpectationSummary;

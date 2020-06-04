import React from "react";
import TestReport, {Matchers} from "./index";

export default {
  title: "Test report",
};

export const Failure = () => (
  <TestReport name="add() validation passed saves user to database">
    Children (aka failure details) means failure
  </TestReport>
);

export const FailureWithDetails = () => (
  <TestReport name="add() validation passed saves user to database">
    <Matchers.ToBe expected={true} actual={false} />
  </TestReport>
);

export const Success = () => (
  <TestReport name="add() validation passed saves user to database" />
);

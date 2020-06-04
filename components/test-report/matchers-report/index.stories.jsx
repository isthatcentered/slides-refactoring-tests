import * as React from "react";
import { ToBe, ToBeDisabled, ToHaveLength } from "./index";

export const toHaveLength = () => (
  <ToHaveLength expected={4} passed={[]} actual={3} />
);

export const toBe = () => (
  <ToBe expected={true} actual={false} />
);

export const toBeDisabled = () => <ToBeDisabled />;

export default {
  title: "Failure details",
};

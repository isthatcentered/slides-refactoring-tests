import * as React from "react";
import Layout from "../layout";
import Chapter from ".";

export const toStorybook = () => (
  <Layout>
    <Chapter emojis="🔎😏" title="The creep" />
  </Layout>
);
export default {
  title: "Chapter",
};

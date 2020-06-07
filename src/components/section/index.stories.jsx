import * as React from "react";
import Section from ".";
import "../../styles.css"

const Layout = ({ children }) => <div className="h-screen">{children}</div>;

export const toStorybook = () => (
  <Layout>
    <Section title="Expressiveness" />
  </Layout>
);

export default {
  title: "Section",
};

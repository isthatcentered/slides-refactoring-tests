import * as React from "react";
import "../../styles.css";

const Layout = ({ children }) => (
  <div style={{ height: "100vh", padding: ".5rem" }}>
    {children}
  </div>
);

export default Layout;


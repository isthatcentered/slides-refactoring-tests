import * as React from "react";

const Split = ({ left, right }) => (
  <div
    style={{
      display: "flex",
      position: "fixed",
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
    }}
  >
    
    <div
      style={{
        width: "50%",
        background: "#1E1E1E",
        display: "flex",
        alignItems: "center",
      }}
    >
      {left}
    </div>
    
    <div
      style={{
        width: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {right}
    </div>
    
  </div>
);


export default Split

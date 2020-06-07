import * as React from "react";

const styleComponent = (classes) => (props) => (
  <div
    {...props}
    className={classes + " " + props.className}
  />
);

const Slide = styleComponent("h-full flex");

const Frame = styleComponent(
  "border-primary-600 border-8 m-6 p-6"
);

const Section = ({ title }) => (
  <Slide className="">
    <Frame className="flex-1 flex items-center justify-center">
      <h1 className="font-bold text-primary-600" style={{fontSize: 88}}>
        {title}
      </h1>
    </Frame>
  </Slide>
);

export default Section;

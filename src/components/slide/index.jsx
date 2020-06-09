import theme from "../../theme";
import makeStyleComponent from "../../make-style-component";

const Slide = makeStyleComponent({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colors.background,
});

export default Slide;

import { createUseStyles } from "react-jss";

export default createUseStyles({
  control: {
    transform: "translate(0)",
    margin: "0 auto",
    width: 300,
    height: 300,
    maxWidth: "90vw",
    maxHeight: "90vh",
    "@media (min-width: 800px) and (min-height: 800px)": {
      width: 500,
      height: 500,
    },
  },
  verticalSlider: {
    position: "absolute",
    height: "100%",
  },
  horizontalSlider: {
    position: "absolute",
    width: "100%",
  },
  top: {
    extend: "horizontalSlider",
    right: 0,
    top: 0,
  },
  left: {
    extend: "verticalSlider",
    left: 0,
    top: 0,
  },
  bottom: {
    extend: "horizontalSlider",
    left: 0,
    bottom: 0,
  },
  right: {
    extend: "verticalSlider",
    right: 0,
    bottom: 0,
  },
});

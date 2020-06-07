import { createUseStyles } from "react-jss";

export default createUseStyles({
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  control: {
    width: "94vw",
    height: "94vw",
    maxWidth: 500,
    maxHeight: 500,
    transform: "translate(0)",
    margin: "0 auto",
  },
  wrapper: {
    animationName: "$fadeIn",
    animationDuration: ".5s",
  },
  elliptical: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      marginLeft: 8,
      marginRight: 8,
      fontWeight: 500,
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

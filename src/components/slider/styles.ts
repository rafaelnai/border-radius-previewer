import { createUseStyles } from "react-jss";

export default createUseStyles({
  slider: (props: { vertical: boolean }) => ({
    position: props.vertical ? "absolute" : "block",
    transform: props.vertical ? "rotate(270deg)" : "none",
    "-webkit-appearance": "none",
    width: "100%",
    height: 10,
    background: "#a5b1c2",
    outline: "none",
    opacity: 0.7,
    "-webkit-transition": ".2s",
    transition: "opacity .2s",
    "&::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      appearance: "none",
      width: 15,
      height: 15,
      background: "#4b6584",
      cursor: "pointer",
    },
    "&::-moz-range-thumb": {
      width: 15,
      height: 15,
      background: "#4b6584",
      cursor: "pointer",
    },
  }),
});

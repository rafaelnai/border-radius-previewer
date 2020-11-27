import { createUseStyles } from "react-jss";

export default createUseStyles({
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  control: {
    width: 500,
    height: 500,
    maxWidth: "90vw",
    maxHeight: "90vw",
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
});

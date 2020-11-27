import { createUseStyles } from "react-jss";

export default createUseStyles({
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  wrapper: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to left, rgb(36, 198, 220), rgb(81, 74, 157))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    padding: 72,
    background: "rgba(0, 0, 0, .2)",
    textAlign: "center",
    fontSize: 64,
    color: "#fff",
    animationName: "$fadeIn",
    animationDuration: ".5s",
  },
});

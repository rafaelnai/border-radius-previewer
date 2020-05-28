import { createUseStyles } from "react-jss";

export default createUseStyles({
  wrapper: {
    position: "relative",
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  button: {
    cursor: "pointer",
    backgroundColor: "#24c6dc",
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: 80,
    border: "none",
    "&:hover": {
      backgroundColor: "#00a0d0",
    },
  },
  output: {
    margin: 0,
    background: "transparent",
    outline: "none",
    border: "none",
    width: "calc(100% - 80px)",
    fontSize: 16,
  },
});

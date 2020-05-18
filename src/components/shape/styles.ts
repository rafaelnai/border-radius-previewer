import { createUseStyles } from "react-jss";
import { Props } from "./shape";

export default createUseStyles({
  shape: ({ radius }: Props) => ({
    borderRadius: radius,
    display: "block",
    backgroundColor: "#2d98da",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
  }),
});

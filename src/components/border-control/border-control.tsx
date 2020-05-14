import React, { ReactNode } from "react";
import useStyles from "./styles";

export default function BorderControl(props: { children: ReactNode }) {
  const classes = useStyles();

  return <div className={classes.control}>{props.children}</div>;
}

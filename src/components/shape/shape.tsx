import React from "react";
import useStyles from "./styles";

export interface Props {
  radius: string;
}

export default function BorderControl(props: Props) {
  const classes = useStyles(props);

  return <div className={classes.shape} />;
}

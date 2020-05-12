import React from "react";
import useStyles from "./styles";

interface Props {
  name?: string;
  title?: string;
  vertical?: boolean;
  value?: number;
  min?: number;
  max?: number;
}

function Slider(props: Props) {
  const { name, title, vertical, value, min, max } = props;
  const classes = useStyles({ vertical });

  return (
    <input
      className={classes.slider}
      name={name}
      title={title}
      value={value}
      type="range"
      min={min}
      max={max}
    />
  );
}

Slider.defaultProps = {
  name: "simple-slider",
  title: "Simple slider",
  vertical: false,
  value: 0,
  min: 0,
  max: 10,
};

export default Slider;

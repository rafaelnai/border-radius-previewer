import React, { useState } from "react";
import Slider from "../../components/slider";
import useStyles from "./styles";
import Shape from "../../components/shape";

export default function BorderEditor() {
  const classes = useStyles();
  const [controls, setControls] = useState({
    top: 0,
    left: 100,
    bottom: 100,
    right: 0,
  });

  const handleChange = (item: string) => (values: number[]) => {
    setControls({
      ...controls,
      [item]: values,
    });
  };

  const isVertical = (item: string) => {
    return item === "left" || item === "right";
  };

  const getBorderRadius = (elliptical: boolean) => {
    const { bottom, left, right, top } = controls;

    const reverseOf = (pos: number) => 100 - pos;

    if (elliptical) {
      return `
        ${reverseOf(top)}% ${top}%
        ${bottom}% ${reverseOf(bottom)}%
        /
        ${reverseOf(left)}% ${reverseOf(right)}%
        ${right}% ${left}%`;
    }

    return `${reverseOf(left)}px ${top}px ${right}px ${reverseOf(bottom)}px`;
  };

  return (
    <div className={classes.control}>
      <Shape radius={getBorderRadius(false)} />
      {Object.keys(controls).map((item) => (
        <div className={classes[item as keyof typeof controls]} key={item}>
          <Slider
            handleChange={handleChange(item)}
            min={0}
            max={100}
            values={controls[item as keyof typeof controls]}
            vertical={isVertical(item)}
          />
        </div>
      ))}
    </div>
  );
}

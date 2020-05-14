import React, { useState } from "react";
import BorderControl from "../border-control/";
import Slider from "../slider";

export default function BorderEditor() {
  const [controls, setControls] = useState({
    top: [50],
    left: [50],
    bottom: [50],
    right: [50],
  });

  const handleChange = (item: string) => (values: number[]) => {
    setControls({
      ...controls,
      [item]: values,
    });
  };

  const isVertical = (item: string) => {
    return item === "top" || item === "bottom";
  };

  return (
    <BorderControl>
      {Object.keys(controls).map((item) => (
        <Slider
          key={item}
          handleChange={handleChange(item)}
          min={0}
          max={100}
          values={controls[item as keyof typeof controls]}
          vertical={isVertical(item)}
        />
      ))}
    </BorderControl>
  );
}

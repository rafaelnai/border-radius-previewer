import React, { useState, createRef, useCallback } from "react";
import Slider from "../../components/slider";
import useStyles from "./styles";
import Shape from "../../components/shape";
import Switch from "react-switch";
import Output from "../../components/output";

export default function BorderEditor() {
  const classes = useStyles();
  const [controls, setControls] = useState({
    top: 0,
    left: 100,
    bottom: 100,
    right: 0,
  });
  const [elliptical, setElliptical] = useState(false);
  const outputRef = createRef<HTMLInputElement>();

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
      return [
        `${reverseOf(top)}% ${top}% ${bottom}% ${reverseOf(bottom)}%`,
        `${reverseOf(left)}% ${reverseOf(right)}% ${right}% ${left}%`,
      ].join(" / ");
    }

    return `${reverseOf(left)}% ${top}% ${right}% ${reverseOf(bottom)}%`;
  };

  const currentRadius = getBorderRadius(elliptical);

  const handleCopy = useCallback((el: HTMLInputElement | null) => {
    console.log(el);
    el?.select();
    el?.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Border Radius Previewer</h1>
      <label className={classes.elliptical}>
        <span>Simple</span>
        <Switch
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#3867d6"
          offColor="#778ca3"
          onChange={() => setElliptical((current) => !current)}
          checked={elliptical}
        />
        <span>Complex</span>
      </label>

      <Output
        handleCopy={() => handleCopy(outputRef.current)}
        ref={outputRef}
        value={currentRadius}
      />

      <div className={classes.control}>
        <Shape radius={currentRadius} />
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
    </div>
  );
}
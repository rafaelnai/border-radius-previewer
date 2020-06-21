import React, { useState, createRef, useCallback, useEffect } from "react";
import useStyles from "./styles";
import Switch from "react-switch";
import Output from "../../components/output";
import CopiedMessage from "../../components/copied-message/";
import BorderControl from "../../components/border-control";

export default function BorderEditor() {
  const classes = useStyles();
  const [copiedScreen, setCopiedScreen] = useState(false);
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
    el?.select();
    el?.setSelectionRange(0, 99999);
    document.execCommand("copy");

    setCopiedScreen(true);
  }, []);

  useEffect(() => {
    if (copiedScreen) setTimeout(() => setCopiedScreen(false), 700);
  }, [copiedScreen]);

  if (copiedScreen) return <CopiedMessage />;

  return (
    <section className={classes.wrapper}>
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

      <BorderControl
        controls={controls}
        currentRadius={currentRadius}
        handleChange={handleChange}
      />
    </section>
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import useStyles from './styles';
import Output from 'components/Output';
import CopiedMessage from 'components/CopiedMessage';
import BorderControl from 'components/BorderControl';
import BorderOption from 'components/BorderOption/BorderOption';

const BorderEditor: React.FC = () => {
  const classes = useStyles();
  const [copiedScreen, setCopiedScreen] = useState(false);
  const [controls, setControls] = useState({
    top: 0,
    left: 100,
    bottom: 100,
    right: 0,
  });
  const [elliptical, setElliptical] = useState(false);
  const outputRef = React.createRef<HTMLInputElement>();

  const handleChange = (key: string) => (values: number[]) => {
    setControls({
      ...controls,
      [key]: values,
    });
  };

  const toggleElliptical = () => setElliptical((current) => !current);
  const reverseOf = (pos: number) => 100 - pos;

  const getBorderRadius = useCallback(
    (isElliptical: boolean) => {
      const { bottom, left, right, top } = controls;

      if (isElliptical) {
        return [
          `${reverseOf(top)}% ${top}% ${bottom}% ${reverseOf(bottom)}%`,
          `${reverseOf(left)}% ${reverseOf(right)}% ${right}% ${left}%`,
        ].join(' / ');
      }

      return `${reverseOf(left)}% ${top}% ${right}% ${reverseOf(bottom)}%`;
    },
    [controls, reverseOf]
  );

  const handleCopy = useCallback(
    (el: HTMLInputElement | null) => () => {
      el?.select();
      el?.setSelectionRange(0, 99999);
      document.execCommand('copy');

      setCopiedScreen(true);
    },
    [setCopiedScreen]
  );

  useEffect(() => {
    if (copiedScreen) setTimeout(() => setCopiedScreen(false), 700);
  }, [copiedScreen, setCopiedScreen]);

  if (copiedScreen) return <CopiedMessage />;

  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>Border Radius Previewer</h1>
      <BorderOption active={elliptical} handleChange={toggleElliptical} />
      <Output handleCopy={handleCopy(outputRef.current)} ref={outputRef} value={getBorderRadius(elliptical)} />
      <BorderControl controls={controls} currentRadius={getBorderRadius(elliptical)} handleChange={handleChange} />
    </section>
  );
};

export default BorderEditor;

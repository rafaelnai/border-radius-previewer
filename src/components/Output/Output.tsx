import React, { forwardRef } from 'react';
import { ReactComponent as CopyIcon } from './copy.svg';
import useStyles from './styles';

type TProps = {
  value: string;
  handleCopy: React.ReactEventHandler;
};

const Output = forwardRef<HTMLInputElement, TProps>(({ handleCopy, value }, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <input ref={ref} className={classes.output} value={value} name="output" readOnly />
      <button onClick={handleCopy} className={classes.button}>
        <CopyIcon height={25} width={25} />
      </button>
    </div>
  );
});

export default Output;

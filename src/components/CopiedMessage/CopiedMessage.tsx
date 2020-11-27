import React from 'react';
import useStyles from './styles';

const CopiedMessage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Paste me!</h2>
    </div>
  );
};

export default CopiedMessage;

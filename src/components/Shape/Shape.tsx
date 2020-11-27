import React from 'react';
import useStyles from './styles';

export type TProps = {
  radius: string;
};

const Shape: React.FC<TProps> = ({ radius }: TProps) => {
  const classes = useStyles({ radius });

  return <div className={classes.shape} />;
};

export default Shape;

import React from 'react';
import useStyle from './style';

const Minimal: React.FC = props => {
  const classes = useStyle();
  const { children } = props;
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <main className={classes.content}>{children}</main>
      <div className={classes.bottom}></div>
    </div>
  );
};

export default Minimal;

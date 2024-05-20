import React from 'react';
import { Button } from '@mui/material';

export function ButtonContainedPrimary({ children, onClick, className }) {
  return (
    <Button
      variant="contained"
      className={'bg-target-primary-default ' + className}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}

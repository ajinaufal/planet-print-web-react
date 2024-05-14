import React from 'react';
import { Button } from '@mui/material';

export function ButtonContained({ children, onClick }) {
  return (
    <Button variant="contained" className="bg-target-primary-default" onClick={() => onClick()}>
      {children}
    </Button>
  );
}

import React from 'react';
import { Button } from '@mui/material';

export function ButtonContained({ children }) {
  return (
    <Button variant="contained" className="bg-target-primary-default">
      {children}
    </Button>
  );
}

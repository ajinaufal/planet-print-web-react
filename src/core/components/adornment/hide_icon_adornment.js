import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export function HideIconAdomment({ onClick = () => {}, showPassword = false }) {
  return (
    <InputAdornment position="end">
      <IconButton onClick={() => onClick()} edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
}

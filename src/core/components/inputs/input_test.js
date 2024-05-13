import { TextField } from '@mui/material';

export function TextInput({ className = '', label = '', onChange = (e) => {} }) {
  return (
    <TextField className={className} label={label} size="small" fullWidth onChange={onchange} />
  );
}

import { InputAdornment, TextField } from '@mui/material';

export function TextInput({
  className = '',
  label = '',
  type = 'text',
  onChange = (e) => {},
  value = '',
  endAdornment,
  startAdornment,
}) {
  const inputProps = {};
  if (endAdornment) inputProps.endAdornment = endAdornment;
  if (startAdornment) inputProps.startAdornment = startAdornment;
  return (
    <TextField
      type={type}
      className={className}
      label={label}
      size="small"
      fullWidth
      value={value}
      onChange={(e) => onChange(e)}
      InputProps={inputProps}
    />
  );
}

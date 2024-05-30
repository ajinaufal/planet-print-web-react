import { TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export function TextInput({
    className = '',
    label,
    type = 'text',
    onChange = (e) => {},
    value,
    endAdornment,
    startAdornment,
    fullWidth = false,
    placeholder,
    sx,
    id,
    required,
    textError = '',
}) {
    const inputProps = {};
    if (endAdornment) inputProps.endAdornment = endAdornment;
    if (startAdornment) inputProps.startAdornment = startAdornment;
    return (
        <TextField
            error={textError.length > 0}
            helperText={textError}
            id={id}
            type={type}
            className={className}
            label={label}
            size="small"
            fullWidth={fullWidth}
            required={required}
            value={value}
            onChange={(e) => onChange(e)}
            InputProps={inputProps}
            placeholder={placeholder}
            sx={sx}
        />
    );
}

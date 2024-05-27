import { MenuItem, Select } from '@mui/material';

export function SelectInput({
  options = [],
  getOptionLabel,
  getOptionValue,
  handleChange = (value) => {},
  value,
  id = '',
}) {
  const optionLabel = (option) => {
    if (typeof getOptionLabel == 'function') {
      return getOptionLabel(option);
    }
    return option.label || '';
  };

  const optionValue = (option) => {
    if (typeof getOptionLabel == 'function') {
      return getOptionValue(option);
    }
    return option.value || '';
  };

  return (
    <Select id={id} value={value} onChange={(e) => handleChange(e)} size="small">
      {(options || []).map((option) => (
        <MenuItem value={optionValue(option)}>{optionLabel(option)}</MenuItem>
      ))}
    </Select>
  );
}

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const Dropdown = ({
  label,
  name,
  onChangeHandler,
  errorMessage,
  value,
  items,
}) => {
  return (
    <FormControl variant="outlined" error={!!errorMessage}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        onChange={onChangeHandler}
        label={label}
        value={value}
      >
        {items.map((i) => (
          <MenuItem key={i.id} value={i.id}>
            {i.title}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default Dropdown;

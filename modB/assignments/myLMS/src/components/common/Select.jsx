"use client"
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from "@mui/material"

const Select = ({
  label,
  value,
  onChange,
  options = [],
  required = false,
  fullWidth = true,
  variant = "outlined",
  ...props
}) => {
  return (
    <FormControl variant={variant} fullWidth={fullWidth} required={required}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect value={value} onChange={onChange} label={label} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select

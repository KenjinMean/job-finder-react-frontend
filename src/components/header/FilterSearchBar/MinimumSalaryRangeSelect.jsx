import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function MinimumSalaryRangeSelect({ value, onChange }) {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="minimum-salary-label">Minimum Salary</InputLabel>
      <Select
        labelId="minimum-salary-label"
        id="minimum-salary-select"
        value={value}
        label="Minimum Salary"
        onChange={onChange}
      >
        <MenuItem value="">
          <em>Clear</em>
        </MenuItem>
        <MenuItem value={10000}>₱10,000</MenuItem>
        <MenuItem value={20000}>₱20,000</MenuItem>
        <MenuItem value={30000}>₱30,000</MenuItem>
        <MenuItem value={40000}>₱40,000</MenuItem>
        <MenuItem value={50000}>₱50,000</MenuItem>
        <MenuItem value={60000}>₱60,000</MenuItem>
        <MenuItem value={75000}>₱75,000</MenuItem>
        <MenuItem value={100000}>₱100,000</MenuItem>
        <MenuItem value={150000}>₱150,000</MenuItem>
        <MenuItem value={200000}>₱200,000</MenuItem>
        <MenuItem value={250000}>₱250,000</MenuItem>
        <MenuItem value={250001}>Greater than ₱250,000</MenuItem>
      </Select>
    </FormControl>
  );
}

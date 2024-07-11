import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const WORK_SETUPS = ["Remote", "Onsite", "Hybrid"];

export default function WorkSetupSelect({ workSetup, handleWorkSetupChange }) {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="work-location-select-label">Work Location</InputLabel>
      <Select
        labelId="work-location-select-label"
        id="work-location-select"
        multiple
        value={workSetup}
        onChange={handleWorkSetupChange}
        input={<OutlinedInput label="Work Location" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {WORK_SETUPS.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={workSetup.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

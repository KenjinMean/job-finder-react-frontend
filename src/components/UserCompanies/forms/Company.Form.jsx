import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

const companySizeCategory = [
  { id: 1, size: "below 10" },
  { id: 2, size: "10-50" },
  { id: 3, size: "51-200" },
  { id: 4, size: "201-500" },
  { id: 5, size: "501-1,000" },
  { id: 6, size: "1,001-5,000" },
  { id: 7, size: "Over 5,000" },
];

const CompanyForm = ({ onSubmit, defaultValues, disabled }) => {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setValue("company_logo", file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setValue("company_logo", null);
  };

  return (
    <Box sx={{ padding: ".5rem" }}>
      <Typography id="modal-add-company" variant="h6" component="h2">
        {defaultValues ? "Update Company" : "Add New Company"}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <TextField
              required
              fullWidth
              size="small"
              id="company-name"
              label="Company Name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TextField
              fullWidth
              size="small"
              id="company-email"
              label="Company Email"
              {...register("email")}
            />
            <TextField
              fullWidth
              size="small"
              id="company-location"
              label="Company Location"
              {...register("location")}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TextField
              fullWidth
              size="small"
              id="company-website"
              label="Company Website"
              {...register("website")}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <FormControl fullWidth size="small">
              <InputLabel id="company-size-label">Company Size</InputLabel>
              <Select
                labelId="company-size-label"
                id="company-size"
                defaultValue="1"
                {...register("company_size_id")}
                label="Company Size"
              >
                {companySizeCategory.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              size="small"
              id="company-phone"
              label="Phone"
              {...register("phone")}
            />
          </div>
          <TextField
            fullWidth
            id="company-description"
            label="Description"
            multiline
            rows={4}
            {...register("description")}
          />

          <div
            className={`flex flex-col gap-3 sm:flex-row ${
              defaultValues ? "sm:justify-end" : "sm:justify-between"
            }`}
          >
            {!defaultValues && (
              <div className="flex flex-col gap-3 sm:flex-row">
                <div>
                  <Input
                    accept="image/*"
                    id="company-logo"
                    type="file"
                    sx={{ display: "none" }}
                    onChange={onFileChange}
                  />
                  <label htmlFor="company-logo">
                    <Button variant="contained" fullWidth component="span">
                      {selectedFile ? "Change Logo" : "Upload Logo"}
                    </Button>
                  </label>
                </div>
                {selectedFile && (
                  <Button variant="outlined" onClick={handleRemoveFile}>
                    remove file: {selectedFile.name}
                  </Button>
                )}
              </div>
            )}
            <Button variant="outlined" type="submit" disabled={disabled}>
              Submit
            </Button>
          </div>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </Box>
  );
};

export default CompanyForm;

import React, { useEffect } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, Controller } from "react-hook-form";

import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";

import useAddSkill from "../../../hooks/useAddSkill";
import { isObjectEmpty } from "../../../utils/isObjectEmpty";
import { useApiJobTypesFetch } from "../../../hooks/requests/useApiJobTypes";
import { useApiUserCompaniesFetch } from "../../../hooks/useApiUserCompanies";
import { useApiWorkLocationTypesFetch } from "../../../hooks/requests/useApiWorkLocationTypes";

const experienceLevels = ["Junior", "Mid", "Senior"];

const JobForm = ({
  onSubmit,
  disabled,
  companyId = "",
  defaultValues = {},
}) => {
  // Transform job_types from array of objects to array of ids
  const transformJobTypes = (jobTypes) => jobTypes.map((type) => type.id);

  // Transform work_location_types from array of objects to array of values
  const transformWorkLocationTypes = (workLocationTypes) =>
    workLocationTypes.map((type) => type.id);

  // Transform default values
  const transformedDefaultValues = {
    ...defaultValues,
    job_types: transformJobTypes(defaultValues.job_types || []),
    work_location_types: transformWorkLocationTypes(
      defaultValues.work_location_types || []
    ),
  };

  const isDefaultValuesPropsNotPresent = isObjectEmpty(defaultValues);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: transformedDefaultValues,
  });

  const { AddSkillUiComponent, selectedSkills } = useAddSkill(
    defaultValues.skills
  );

  const { data: userCompanies } = useApiUserCompaniesFetch();

  // used if user opens post a job link that is not from company page and sets default company as first company
  const defaultCompanyId = companyId
    ? companyId
    : defaultValues?.company?.id
    ? defaultValues?.company?.id
    : userCompanies[0].id;

  const { data: jobTypes } = useApiJobTypesFetch();
  const { data: workLocationTypes } = useApiWorkLocationTypesFetch();

  useEffect(() => {
    const skillIds = selectedSkills.map((skill) => skill.id);
    setValue("skills", skillIds);
  }, [selectedSkills, setValue]);

  return (
    <>
      <form
        className="flex flex-col gap-3 mb-20 sm:mb-36"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Controller
              name="company_id"
              control={control}
              defaultValue={defaultCompanyId}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Company</InputLabel>
                  <Select {...field} label="Company" required>
                    {userCompanies.map((company) => (
                      <MenuItem key={company.id} value={company.id}>
                        {company.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Title" fullWidth required />
              )}
            />
            <Controller
              name="location"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Location" fullWidth />
              )}
            />
            <Controller
              name="salary"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} label="Salary" type="number" fullWidth />
              )}
            />
            <Controller
              name="experience_level"
              control={control}
              defaultValue={
                isDefaultValuesPropsNotPresent ? experienceLevels[0] : []
              }
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Experience Level</InputLabel>
                  <Select {...field} label="Experience Level" defaultValue="">
                    {experienceLevels.map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="application_deadline"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Application Deadline"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
            <Controller
              name="job_types"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Job Types</InputLabel>
                  <Select
                    {...field}
                    label="Job Types"
                    multiple
                    renderValue={(selected) =>
                      (selected || [])
                        .map(
                          (id) =>
                            jobTypes?.find((type) => type.id === id)?.job_type
                        )
                        .join(", ")
                    }
                  >
                    {jobTypes?.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        <Checkbox
                          checked={(field.value || []).includes(type.id)}
                        />
                        <ListItemText primary={type.job_type} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="work_location_types"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Work Location Types</InputLabel>
                  <Select
                    {...field}
                    label="Work Location Types"
                    multiple
                    renderValue={(selected) =>
                      (selected || [])
                        .map(
                          (id) =>
                            workLocationTypes?.find((type) => type.id === id)
                              ?.name
                        )
                        .join(", ")
                    }
                  >
                    {workLocationTypes.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        <Checkbox
                          checked={(field.value || []).includes(type.id)}
                        />
                        <ListItemText primary={type.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
            <Controller
              name="qualifications"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Qualifications"
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
            <Controller
              name="responsibilities"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Responsibilities"
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
            <Controller
              name="benefits"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Benefits"
                  fullWidth
                  multiline
                  rows={4}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <Typography variant="h6">Job Skills</Typography>
          {AddSkillUiComponent()}
        </div>
        <div className="flex justify-end">
          <Button variant="outlined" type="submit" disabled={disabled}>
            Submit
          </Button>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default JobForm;

import React, { Fragment, useEffect } from "react";

import { jobTypes } from "../../../constants/jobTypes.Constants";
import { positions } from "../../../constants/postions.Constants";
import { workLocationTypes } from "../../../constants/workLocationTypes.Constants";

import LabeledSelectUiComponent from "../../UI/LabeledSelect.Ui.Component";
import LabeledCheckboxUiComponent from "../../UI/LabeledCheckbox.Ui.Component";
import LabeledDateInputUiComponent from "../../UI/LabeledDateInput.Ui.Component";
import LabeledTextInputUiComponent from "../../UI/LabeledTextInput.Ui.Component";

export default function UserExperienceInputForm({ form, isSubmitting }) {
  const { watch, setValue, resetField } = form;

  const endDate = watch("end_date");
  const isCurrent = watch("is_current");

  useEffect(() => {
    if (isCurrent && endDate) {
      setValue("end_date", "");
    } else if (!isCurrent) {
      resetField("end_date");
    }
  }, [isCurrent, endDate]);

  return (
    <Fragment>
      <div className="grid gap-3 sm:grid-cols-2">
        <LabeledTextInputUiComponent
          form={form}
          name="job_title"
          label="Job Title"
          disabled={isSubmitting}
          placeholder="Ex: Bank Manager"
          validationSchema={{
            required: "Job Title field is required",
          }}
        />

        <LabeledSelectUiComponent
          name="position"
          label="Position"
          form={form}
          options={positions}
          disabled={isSubmitting}
          defaultOption="Select Position"
          validationSchema={{
            required: "Position is required",
          }}
        />
      </div>

      <LabeledTextInputUiComponent
        form={form}
        name="company_name"
        label="Company Name"
        placeholder="Ex: Google"
        disabled={isSubmitting}
        validationSchema={{
          required: "Company Name field is required",
        }}
      />

      <LabeledTextInputUiComponent
        name="location"
        label="Location"
        form={form}
        disabled={isSubmitting}
        placeholder="Ex: Fern street, UK"
        validationSchema={{
          required: "Location field is required",
        }}
      />

      {/*  -----------------------------------------------------------  */}
      <div className="grid gap-3 sm:grid-cols-2">
        <LabeledSelectUiComponent
          form={form}
          disabled={isSubmitting}
          name="work_location_type"
          label="Work Location Type"
          options={workLocationTypes}
          defaultOption="Select Location Type"
          validationSchema={{
            required: "Location Type is required",
          }}
        />

        <LabeledSelectUiComponent
          form={form}
          name="job_type"
          label="Job Type"
          options={jobTypes}
          disabled={isSubmitting}
          defaultOption="Select Job Type"
          validationSchema={{
            required: "Job Type is required",
          }}
        />
      </div>

      {/*  -----------------------------------------------------------  */}
      <LabeledCheckboxUiComponent
        name="is_current"
        form={form}
        disabled={isSubmitting}
        label="I'm currently working here"
      />

      {/*  -----------------------------------------------------------  */}
      <div className="grid gap-3 sm:grid-cols-2">
        <LabeledDateInputUiComponent
          form={form}
          name="start_date"
          label="Start Date"
          disabled={isSubmitting}
          validationSchema={{
            required: "Start Date field is required",
          }}
        />

        <LabeledDateInputUiComponent
          form={form}
          name="end_date"
          label="End Date"
          disabled={watch("is_current") || isSubmitting}
          validationSchema={{
            required: isCurrent ? false : "End Date field is required",
          }}
        />
      </div>
    </Fragment>
  );
}

import React, { useEffect, useState } from "react";
import LabeledTextAreaInputUiComponent from "../../UI/LabeledTextAreaInput.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserAboutForm({
  handleSubmit,
  payload,
  handleInputChange,
}) {
  const [charCount, setCharCount] = useState(
    payload?.about ? payload.about.length : 0
  );

  const maxLength = 2600;

  const updateCharCount = (value) => {
    setCharCount(value.length);
  };

  useEffect(() => {
    setCharCount(payload?.about ? payload.about.length : 0);
  }, [payload]);

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <LabeledTextAreaInputUiComponent
        name="about"
        id="about"
        label="About"
        cols="30"
        rows="10"
        autoFocus
        maxLength={maxLength}
        value={payload?.about}
        onChange={(e) => {
          handleInputChange(e);
          updateCharCount(e.target.value);
        }}
      />
      <div className="flex flex-row-reverse mt-2 text-slate-500">
        {charCount}/{maxLength} characters
      </div>

      <div className="flex flex-row-reverse mt-5">
        <ButtonActionPrimaryUiComponent>Save</ButtonActionPrimaryUiComponent>
      </div>
    </form>
  );
}

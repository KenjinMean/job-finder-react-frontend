import React, { useEffect, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-5 overflow-y-auto">
        <span className="text-sm"> * indicates required</span>
        <textarea
          maxLength={maxLength}
          autoFocus
          name="about"
          id=""
          value={payload?.about}
          cols="30"
          rows="10"
          className="p-2 border outline-offset-1"
          onChange={(e) => {
            handleInputChange(e);
            updateCharCount(e.target.value);
          }}
        ></textarea>{" "}
        <div className="flex flex-row-reverse mt-2 text-slate-500">
          {charCount}/{maxLength} characters
        </div>
      </div>

      <div className="flex flex-row-reverse p-5">
        <button>Save</button>
      </div>
    </form>
  );
}

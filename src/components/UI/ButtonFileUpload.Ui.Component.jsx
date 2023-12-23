import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useFileUploadStore } from "../../services/state/FileUploadStore";

export default function ButtonFileUploadUiComponent({
  title,
  handleFileSelect,
}) {
  const navigate = useNavigate();
  const { setImageDataURL, setImageFile } = useFileUploadStore();

  const ref = useRef();

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];

    if (fileUploaded) {
      handleFileSelect(fileUploaded);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-violet-50 text-violet-500 hover:bg-violet-100"
    >
      <span>{title}</span>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </button>
  );
}

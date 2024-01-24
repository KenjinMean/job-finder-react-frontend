// SOURCE: https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8

import React, { useRef } from "react";

import useFileHandling from "../../hooks/useFileHandling";

export default function ButtonFileUploadUiComponent({
  title,
  accept = "./*",
  handleFileSelect,
}) {
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
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />
    </button>
  );
}

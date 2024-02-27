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
      className="flex items-center gap-2 px-4 py-1 transition-colors border rounded-md border-border-100 font-secondary text-content-gray hover:text-content-black hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:bg-slate-500"
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

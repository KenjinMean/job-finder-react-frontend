import React, { useRef } from "react";

export default function ButtonAddFileUiComponent({ title }) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  }; // Call a function (passed as a prop from the parent component)

  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    console.log(fileUploaded);

    // handleFile(fileUploaded);
  };

  return (
    <label htmlFor="fileInput">
      <button onClick={handleClick}>{title}</button>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} // Make the file input element invisible
      />
    </label>
  );
}

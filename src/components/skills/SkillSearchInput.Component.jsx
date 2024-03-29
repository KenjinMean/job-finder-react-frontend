import React, { Fragment } from "react";

import { useDebouncedCallback } from "../../hooks/UseDebounceCallback";

export default function SkillSearchInputComponent({
  searchFn,
  className,
  keyword,
  setKeyword,
  placeholder,
  name,
  id,
}) {
  const debouncedSearchSkillFn = useDebouncedCallback(() => {
    searchFn();
  }, 300);

  const handleInputChange = (event) => {
    const newKeyword = event.currentTarget.value;
    setKeyword(newKeyword);

    // Trigger debounced search only if the keyword is empty or its length is greater than 1
    if (newKeyword.length === 0 || newKeyword.length > 1) {
      debouncedSearchSkillFn();
    }
  };

  return (
    <Fragment>
      <input
        autoFocus
        type="text"
        id={id}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        value={keyword}
        onChange={(event) => handleInputChange(event)}
        className={className}
      />
    </Fragment>
  );
}

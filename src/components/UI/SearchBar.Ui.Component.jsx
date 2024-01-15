import React from "react";

export default function SearchBarUiComponent({
  id,
  name,
  inputRef,
  placeholder,
  handleSearch,
  handleButtonClear,
  ...inputProps
}) {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>{" "}
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <input
          ref={inputRef}
          type="search"
          id={id}
          name={name}
          className="block w-full p-4 text-sm border rounded-lg border-border-100 text-content-black ps-10 bg-background-gray300 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder || "Search"}
          {...inputProps}
        />
      </div>

      <div className="sm:absolute end-2.5 bottom-2.5 flex flex-col gap-2 mt-5 sm:flex-row">
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium transition-all rounded-lg text-content-black_inverted hover:text-content-black bg-accent-300 hover:bg-accent-310 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          onClick={handleButtonClear}
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium transition-all rounded-lg text-content-black_inverted hover:text-content-black bg-accent-purple hover:bg-accent-310 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

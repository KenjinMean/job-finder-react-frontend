import { Menu } from "@headlessui/react";
import React, { useEffect } from "react";

export default function SearchSuggestionsList({
  searchSuggestions,
  handleSuggestionClick,
  selectedSuggestionIndex,
}) {
  const scrollSuggestionsIntoView = (index) => {
    const activeSuggestions = document.getElementById(`suggestion-${index}`);
    if (activeSuggestions) {
      activeSuggestions.scrollIntoView({
        block: "nearest",
        inline: "start",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (selectedSuggestionIndex !== -1) {
      scrollSuggestionsIntoView(selectedSuggestionIndex);
    }
  }, [selectedSuggestionIndex]);

  return (
    <Menu.Items
      static
      className="flex flex-col absolute z-10 w-full bg-white border top-[105%] rounded-b-md max-h-60 overflow-y-scroll small-thumb-scrollbar empty:hidden"
    >
      {searchSuggestions.map((suggestion, index) => {
        return (
          <Menu.Item
            key={index}
            id={`suggestion-${index}`}
            className="flex items-center"
          >
            {({ active }) => {
              const isSuggestionActive =
                active || index === selectedSuggestionIndex;
              if (active) {
                scrollSuggestionsIntoView(index);
              }

              return (
                <a
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`block px-4 py-2 ${
                    active || isSuggestionActive ? "bg-indigo-100" : ""
                  }`}
                >
                  {suggestion}
                </a>
              );
            }}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );
}

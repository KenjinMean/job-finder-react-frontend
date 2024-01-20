import { Menu } from "@headlessui/react";
import React, { useEffect } from "react";

export default function SearchSuggestionsUiComponent({
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
      className="flex flex-col absolute z-20 w-full bg-background-gray100 text-content-black border top-[105%] left-0 rounded-md max-h-100 sm:max-h-60 overflow-y-scroll small-thumb-scrollbar empty:hidden shadow-lg"
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
                  className={`block px-4 py-2 hover:text-content-black_inverted ${
                    active || isSuggestionActive
                      ? "bg-accent-300 text-content-black_inverted"
                      : ""
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

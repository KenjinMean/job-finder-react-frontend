import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useDebouncedSearchSkillStore = create(
  devtools((set) => ({
    keyword: "",
    setKeyword: (newKeyword) => set({ keyword: newKeyword }),

    searchSuggestions: [],
    setSearchSuggestions: (suggestions) => {
      set({ searchSuggestions: suggestions });
    },
  }))
);

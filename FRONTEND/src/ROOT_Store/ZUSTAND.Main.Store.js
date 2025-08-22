import { create } from "zustand";

export const USE_ZUSTAND_MAIN_STORE = create((set, get) => ({
  // CONFIG
  CONFIG_STATE: 1,

  // FIELDS
  STRING_CURRENT_LINK: "",

  // ACTIONS
  ACTION_CLEAR_CONFIG: () => set({ CONFIG_STATE: 1 }),
  ACTION_CLEAR_FIELDS: () => set({ STRING_CURRENT_LINK: "" }),
  ACTION_CLEAR_ALL: () => {
    const { ACTION_CLEAR_CONFIG, ACTION_CLEAR_FIELDS } = get();

    ACTION_CLEAR_CONFIG();
    ACTION_CLEAR_FIELDS();
  },
}));

/*
  CONFIG_STATE
    1 - search
    2 - loading
    3 - button dl
    4 - failed to find
*/

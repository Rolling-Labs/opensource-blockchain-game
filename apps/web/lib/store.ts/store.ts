import { create } from "zustand";
import { ISelectedSoltice } from "../interface";

export const useSelectedSoltice = create<ISelectedSoltice>((set) => ({
  selectedID: 0,
  setSelectedID: (selectedID) => {
    set((state) => ({ ...state, selectedID }));
  },
}));

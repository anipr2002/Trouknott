import { create } from 'zustand';

interface Store {
  isPreload : boolean,
  setIsPreload : () => void
}

export const useStore = create<Store>((set) => ({
  isPreload: false,
  setIsPreload: () => set({ isPreload: true })
}))
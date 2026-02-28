import { create } from 'zustand'
import {persist } from 'zustand/middleware';
const useAuthStore = create(persist((set) => ({
  currUser: null,
  setCurrUser: (newUser) => set(({currUser: newUser})),
  removeCurrUser: () => set({ currUser: null }),
  updateCurrUser: (updateUser) => set({ currUser: updateUser }),
})))

export default useAuthStore;
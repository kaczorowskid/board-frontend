import { create } from 'zustand';
import { UserStoreProps } from './userStore.type';

export const useUserStore = create<UserStoreProps>((set) => ({
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  isLoggedIn: false,
  isActive: false,
  setUser: (userData) => {
    set((state) => ({
      ...state,
      ...userData
    }));
  }
}));

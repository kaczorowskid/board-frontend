export interface UserStore {
  id: string;
  email: string;
  name: string;
  isLoggedIn: boolean;
  isActive: boolean;
}

export interface UserStoreProps extends UserStore {
  setUser: (userData: UserStore) => void;
}

export interface UserStore {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isLoggedIn: boolean;
  isActive: boolean;
}

export interface UserStoreProps extends UserStore {
  setUser: (userData: UserStore) => void;
}

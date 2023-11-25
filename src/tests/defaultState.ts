export interface DefaultState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isLoggedIn: boolean;
  isActive: boolean;
}

export const defaultState: DefaultState = {
  id: 'ef3fdc54-0cfe-4bd8-895c-0ac4816c4ddc',
  email: 'b@b.pl',
  firstName: 'Test',
  lastName: 'User',
  isLoggedIn: true,
  isActive: true
};

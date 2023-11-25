import { customRender } from 'tests';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';

describe('User - Login', () => {
  it('should render html elements', () => {
    customRender(<Login />);
    const loginTitle = screen.getByRole('heading', {
      name: 'Login'
    });
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    const forgotLink = screen.getByRole('link', {
      name: 'Forgot password?'
    });

    expect(loginTitle).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(loginButton).toBeVisible();
    expect(forgotLink).toBeVisible();
  });

  it('should displaying validation', async () => {
    customRender(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(emailInput, 'b@.pl');
    await userEvent.type(passwordInput, 'ss');

    expect(
      await screen.findByText(/'email' is not a valid email/)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/'password' must be between 3 and 40 characters/)
    ).toBeInTheDocument();
  });

  it('shouldnt display email validation', async () => {
    customRender(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(emailInput, 'b@b.pl');
    await userEvent.type(passwordInput, 's');

    const emailValidation = screen.queryByText(/'email' is not a valid email/);
    const passwordValidation = screen.queryByText(
      /'password' must be between 3 and 40 characters/
    );

    expect(emailValidation).not.toBeInTheDocument();
    expect(passwordValidation).toBeInTheDocument();
  });

  it('shouldnt display password validation', async () => {
    customRender(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(emailInput, 'b@.pl');
    await userEvent.type(passwordInput, 'ssss');

    const emailValidation = screen.queryByText(/'email' is not a valid email/);
    const passwordValidation = screen.queryByText(
      /'password' must be between 3 and 40 characters/
    );

    expect(emailValidation).toBeInTheDocument();
    expect(passwordValidation).not.toBeInTheDocument();
  });
});

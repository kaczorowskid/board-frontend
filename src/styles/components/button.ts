import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    min-width: 120px;
    height: 40px;
  }

  .ant-btn-primary {
    background-color: ${({ theme }) => theme.colors.background.blueberry};

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .ant-btn-primary:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;

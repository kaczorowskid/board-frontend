import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    height: 40px;
    min-width: 120px;
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

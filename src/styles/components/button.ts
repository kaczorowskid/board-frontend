import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    height: 40px;
    min-width: 120px;
  }

  .ant-btn-primary {
    background-color: ${({ theme }) => theme.color.blueberry};

    span {
      color: ${({ theme }) => theme.color.white};
    }
  }

  .ant-btn-primary:not(:disabled):hover {
    background: ${({ theme }) => theme.color.buttonPrimaryHover};
  }
`;

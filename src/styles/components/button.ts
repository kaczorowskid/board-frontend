import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    min-width: 120px;
    height: 40px;
  }

  .ant-btn-primary {
    background-color: ${({ theme }) =>
      theme.components.common.button.background.primary};

    span {
      color: ${({ theme }) => theme.components.common.button.font};
    }
  }

  .ant-btn-primary:not(:disabled):hover {
    background: ${({ theme }) => theme.components.common.button.hover};
  }
`;

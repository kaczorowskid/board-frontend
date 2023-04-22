import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    height: 40px;
    min-width: 120px;
  }

  .ant-btn-primary {
    background-color: #5d7df3;

    span {
      color: white;
    }
  }

  .ant-btn-primary:not(:disabled):hover {
    background: #4062e3;
  }
`;

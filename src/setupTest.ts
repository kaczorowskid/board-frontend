import '@testing-library/jest-dom';

import { server } from 'mocks/server';
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => {
  server.listen();
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
});

afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => server.close());

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  })
});

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: () => {}
  }
});

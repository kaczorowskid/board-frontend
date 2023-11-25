import { vitest } from 'vitest';

export default {
  get: vitest.fn().mockResolvedValue({})
};

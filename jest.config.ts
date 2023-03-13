import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        useESM: false,
      },
    ],
  },
};

export default jestConfig;

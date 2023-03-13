describe('swagger', () => {
  let fnUnderTest: typeof import('..').default;
  it('should demonstrate issue', async () => {
    ({ default: fnUnderTest } = require('..'));
    fnUnderTest();
  });
});

// In order to see compliation error in output replace above with:
// import { default as fnUnderTest } from '..';

// describe('swagger', () => {
//   it('should demonstrate issue', async () => {
//     fnUnderTest();
//   });
// });

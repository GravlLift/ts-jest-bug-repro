import packageJson from './test.json' assert { type: 'json' };

export default () => {
  console.log(packageJson.version);
};

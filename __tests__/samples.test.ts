import { ESLint } from 'eslint';

const CWD = process.cwd();
const cli = new ESLint({
  cwd: CWD,
  extensions: ['ts', 'tsx'],
  baseConfig: require('../.eslintrc'),
});

it('snapshot', async () => {
  const results = await cli.lintFiles(['./samples/**/*']);
  results.forEach((result) => {
    delete result.source;
    result.filePath = result.filePath.slice(CWD.length);
  });
  expect(results).toMatchSnapshot();
});

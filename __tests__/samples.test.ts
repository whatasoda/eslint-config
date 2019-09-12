import { CLIEngine } from 'eslint';
import path from 'path';

const cli = new CLIEngine({
  cwd: path.resolve(__dirname, '../'),
  extensions: ['ts', 'tsx'],
});

it('snapshot', () => {
  const report = cli.executeOnFiles(['./samples/']);
  report.results.forEach((result) => {
    delete result.source;
    delete result.filePath;
  });
  expect(report).toMatchSnapshot();
});

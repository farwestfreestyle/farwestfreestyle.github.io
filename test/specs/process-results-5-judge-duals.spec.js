import { mount } from '@vue/test-utils'
import test from 'ava'
import ResultsProcessor from '../../lib/results-processor';


test('should throw error if missing path', (t) => {
  t.throws(() => {
    const p = new ResultsProcessor();
  }, { instanceOf: Error });
});


test('testing winfree ResultsProcessor helper class', async (t) => {
  const processor = new ResultsProcessor('./test/text-results/2020-01-04-duals-htm.txt'); //./test/text-results/2020-01-04-1-run-htm.txt');
  await processor.parseDuals();
  t.true(processor.hasLines(), 'processor.parse() creates and array of lines');
  // t.is(processor.getLines().length, 413, 'processor.getLines() return array of lines from winfree htm output');
  // t.is(processor.getAllResults().male.length, 42, 'processor.getAllResults() male results');
  // t.is(processor.getAllResults().female.length, 34, 'processor.getAllResults() female results');
  await processor.saveAsJSON('./2020-01-04.json');
  console.log('done writing json file...');
});

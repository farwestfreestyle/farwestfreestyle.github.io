import { mount } from '@vue/test-utils'
import test from 'ava'
import ResultsProcessor from '../../lib/ResultsProcessor';


test('should throw error if missing path', (t) => {
  t.throws(() => {
    const p = new ResultsProcessor();
  }, { instanceOf: Error });
});


test('testing winfree ResultsProcessor helper class', async (t) => {
  const processor = new ResultsProcessor('./test/text-results/2020-01-03-htm.txt');
  await processor.parse();
  t.true(processor.hasLines(), 'processor.parse() creates and array of lines');
  t.is(processor.getLines().length, 413, 'processor.getLines() return array of lines from winfree htm output');
  t.is(processor.getAllResults().male.length, 42, 'processor.getAllResults() male results');
  processor.getAllResults().male.forEach((result) =>  {
    if (result.runs.length < 2) {
      console.log('result less than 2', result);
    }
  });
  t.is(processor.getAllResults().female.length, 34, 'processor.getAllResults() female results');
  await processor.saveAsJSON('./2020-01-03.json');
  console.log('done writing json file...');

});

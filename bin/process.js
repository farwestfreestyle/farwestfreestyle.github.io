#!/usr/bin/env node

const fs = require('fs');

const {
  DISABLE_ARCHIVE,
  IS_SOURCE_FILE } = require('../lib/constants');

const util = require('util');
const spawn = util.promisify(require('child_process').spawn);
const textResultsFolder = './text-results';
const completedFolder = './text-results/completed';
const ResultsProcessor = require('../lib/results-processor');

const archive = async (file) => {
  await spawn('mv', [`${textResultsFolder}/${file}`,`${completedFolder}/${file}`], {shell: true});
}

const getFileList = () => {
  const filelist = [];
  return new Promise((resolve, reject) => {
    fs.readdir(textResultsFolder, { withFileTypes: true }, (err, files) => {
      files.forEach(file => {
        if (!file.isDirectory()) {
          filelist.push(file.name);
        }
      });
      resolve(filelist);
    });
  });
}

const processResults = async (file, folder, disableArchive) => {
  if (IS_SOURCE_FILE.test(file)) {
    const processor = new ResultsProcessor();
    const output = await processor.process(file, folder);
    if (!disableArchive) {
      await archive(file);
    }
  }
  return true;
}

const main = async() => {
  const disableArchive = process.argv[2] === DISABLE_ARCHIVE;
  const promises = [];
  const files = await getFileList();
  files.forEach((file) => {
    promises.push(processResults(file, textResultsFolder, disableArchive));
  });
  const completed = await Promise.all(promises);
  console.log('completed process', completed);
}

main();

import * as fs from 'fs';
import { consoleLogFix } from './console-log-fix';

const inputFile = process.argv[2];
console.log('Processing ', inputFile);
console.log('dirname: ', __dirname);
const output = consoleLogFix(fs.readFileSync(__dirname + '\\' + inputFile, 'utf-8'));
fs.writeFileSync(inputFile, output);

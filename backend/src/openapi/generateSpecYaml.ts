import YAML from 'yaml'
import { join } from 'path';
import * as fs from 'fs';

const input = join(__dirname, '../../src/openapi/build/openapi.json');
const output = join(__dirname, '../../src/openapi/build/openapi.yaml');

const obj = JSON.parse(fs.readFileSync(input, 'utf-8'))

fs.writeFileSync(output, YAML.stringify(obj));

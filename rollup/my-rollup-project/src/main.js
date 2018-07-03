import foo from './foo.js';
import { version } from '../package.json';
import answer from 'the-answer';
export default ()=> {
  console.log(foo);
  console.log ('version: '+version);
  console.log('the answer is ' + answer);
}
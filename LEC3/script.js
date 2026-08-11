import {add, subtract} from './math.js';
import express from express;
import os from 'os';

console.log(math.add(2,3));
console.log(math.subtract(34,6));
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.freemem()/1024*1024*1024);




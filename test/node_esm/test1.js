import { format, dd, MM, yyyy, HH, mm, ss, SSS } from 'udate';

console.log(format`today is ${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date()));

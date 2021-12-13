const { format } = require("udate");

const dd = require("udate/day/dd").default;
const MM = require("udate/month/mm_").default;

console.log(dd, MM);

console.log(format`today is ${dd}-${MM}`(new Date()));

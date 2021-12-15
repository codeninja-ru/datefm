const { format } = require("udate");

const dd = require("udate/day/dd");
const MM = require("udate/month/mm_");

console.log(dd, MM);

console.log(format`today is ${dd}-${MM}`(new Date()));

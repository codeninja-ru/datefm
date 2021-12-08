const { format } = require("udate");

const dd = require("udate/day/dd");
const mm = require("udate/month/mm");

console.log(format`today is ${dd}-${mm}`(new Date()));

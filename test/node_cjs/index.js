(function() {
    const { format, dd, MM, yyyy, HH, mm, ss, SSS } = require('udate');
    console.log(format`today is ${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date()));
})();

(function() {
    const { format } = require("udate");

    const dd = require("udate/day/dd");
    const MM = require("udate/month/mm_");
    const yyyy = require("udate/year/yyyy");
    const HH = require("udate/hour/hh_");
    const mm = require("udate/minute/mm");
    const ss = require("udate/second/ss");
    const SSS = require("udate/millisecond/sss_");

    console.log(format`today is ${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date()));
})();

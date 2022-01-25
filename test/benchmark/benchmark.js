const udate = function() {
    const { format, dd, MM, yyyy, HH, mm, ss } = require('udate');

    return format`${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}`;
}();

const moment = function() {
    const moment = require('moment');
    return function(date) {
        return moment(date).format('DD/MM/YYYY HH:mm:ss');
    };
}();

const dayjs = function() {
    const dayjs = require('dayjs');
    return function(date) {
        return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
    };
}();

const dateFns = function() {
    const { format } = require('date-fns');
    return function(date) {
        return format(date, 'dd/MM/yyyy HH:mm:ss');
    };
}();

const now = new Date();
console.log('udate: ' + udate(now));
console.log('moment: ' + moment(now));
console.log('dayjs: ' + dayjs(now));
console.log('date-fns: ' + dateFns(now));

const Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite
    .add('udate', function() {
        udate(now);
    })
    .add('moment', function() {
        moment(now);
    })
    .add('dayjs', function() {
        dayjs(now);
    })
    .add('date-fns', function() {
        dateFns(now);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });

import format from 'udate/format';

import dd from "udate/day/dd";
import MM from "udate/month/mm_";
import yyyy from "udate/year/yyyy";
import HH from "udate/hour/hh_";
import mm from "udate/minute/mm";
import ss from "udate/second/ss";
import SSS from "udate/millisecond/sss_";

console.log(format`today is ${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date()));

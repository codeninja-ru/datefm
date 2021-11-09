# udate

Simple and fast date foramter for JavaScript

 * **Small** no dependencies, it includes in build only what you use
 * **Fast** @todo benchmarch
 * **Sticks to standards** follows LDML standard by https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * **Well-tested** 100% code coverage

 ## Format
 Usage:

 ```js
 import { format } from 'udate';
 import { DD } from 'udate/format/day';
 import { MM } from 'udate/format/month';
 import { yyyy } from 'udate/format/year;

 console.log('today is ' + format`${DD}/${MM}/${yyyy}`(new Date()));
 ```

 DD, MM, yyyy are formatters. Formatter is a functions that translate date into string.
 the _format_ function combies all formatter together and returns function that does the formatting.

 You can combine everything in one import
 ```js
 import { format, DD, MM, yyyy } from 'udate';

 console.log('today is ' + format`${DD}/${MM}/${yyyy}`(new Date()));
 ```


### Supported formatters
| Pattern | Example | description |
---------------------------------
| D | | |
| DD | | |


# TODO
choose name udate / fndate ...

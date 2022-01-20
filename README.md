# udate

Simple and fast date foramter for JavaScript / TypeScript

 * **Small** no dependencies, it includes in build only what you use
 * **Tree-shackable** supports tree-shacking, your bundle includes only formaters you need
 * **Fast** @todo benchmarch
 * **Sticks to standards** follows the LDML standard by https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * **Well-tested** 100% code coverage

## Format
### Usage

 ```js
import { format } from 'udate';
import dd from 'udate/day';
import MM from 'udate/month';
import yyyy from 'udate/year;

console.log('today is ' + format`${dd}/${MM}/${yyyy}`(new Date()));
```

dd, MM, yyyy are formatters. Formatter is a functions that translate date into string.
the _format_ function combies all formatter together and returns function that does the formatting.

You can combine everything in one import
```js
import { format, dd, MM, yyyy } from 'udate';

console.log('today is ' + format`${dd}/${MM}/${yyyy}`(new Date()));
```

The function returned by _format_ is also a _Formatter_, this means you can reuse this function.

```javascript
import { format, dd, MM, yyyy } from 'udate';

const today = new Date();
const tomorrow = new Date(Date.now() + 24 * 3600 * 1000);

const fmt = format`${dd}/${MM}/${yyyy}`;

console.log('today is ' + fmt(today));
console.log('tommorow is ' + fmt(tommorow));
```

### Languages

Sometime you need the names of monthes or weeks in some specific language.

udate supports next languages
 * English
 * Russian
and you can add more by making your own formaters.

 ```javascript
import { format } from 'udate';
import dd from 'udate/day';
import MMMM from 'udate/month/en/mmmm_';
import yyyy from 'udate/year;

console.log('today is ' + format`${dd} ${MMMM} ${yyyy}`(new Date()));
 ```

 ```javascript
import { format, dd, ru_MMM, yyyy } from 'udate';

console.log('today is ' + format`${dd} ${ru_MMMM} ${yyyy}`(new Date()));
 ```


### Writing your own formatter
Formatter is a function that gets an instance of _Date_ and returns a string.

So, let's make our own _Formatter_
``` js
import { format } from 'udate';

const MS_IN_MINUTE = 60 * 1000;
function minutesAgo(date) {
    const diff = Math.floor((Date.now() - date) / MS_IN_MINUTE);
    if (diff == 1) {
        return '1 minute ago';
    } else if (diff > 1) {
        return diff + ' minutes ago';
    } else {
        return '0 minutes ago';
    }
}

console.log(format`It was ${minutesAgo}`(new Date(Date.now() - 10 * MS_IN_MINUTE)));
// returns: It was 10 minutes ago
```

### Supported formatters
| Pattern | Example | description |
---------------------------------
| D | | |
| DD | | |


# TODO

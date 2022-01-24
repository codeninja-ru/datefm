# udate

Simple and fast date foramter for JavaScript / TypeScript

 * **Small** no dependencies, it includes in build only what you use
 * **Tree-shackable** supports tree-shacking, your bundle includes only formaters you need
 * **Fast** @todo benchmarch
 * **Sticks to standards** follows the LDML standard by https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * **Well-tested** 100% code coverage

Why to use udate? In short it doesn't blow out your bundle size and fast as native code since parsing is done by JavaScript itself.

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

```js
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

The all language specific formaters resides in directories with appoprite langage codes. The code for English is en, for Russian is ru, etc.

So, for instance if you need a full name of month in English, you must look it in 'udate/month/en' import directory. So you import *MMMM* from 'update/month/en/mmmm_' (_MMMM_ is the code of full month of name in you specific language according to _LDML_ standard) or if you use simplified import you can import *en_MMMM*  from 'udate'

```js
import { format } from 'udate';
import dd from 'udate/day';
import MMMM from 'udate/month/en/mmmm_';
import yyyy from 'udate/year;

console.log('today is ' + format`${dd} ${MMMM} ${yyyy}`(new Date()));
 ```

 or in a single-line import

```js
import { format, dd, ru_MMM, yyyy } from 'udate';

console.log('today is ' + format`${dd} ${ru_MMMM} ${yyyy}`(new Date()));
 ```

### Supported formatters
| Pattern | Example | description |
---------------------------------
| D | | |
| DD | | |

### Formater's name convetion

Consider this if you are going to contiribure to _udate_'

Formaters are named according the LDML standard. They are grouped by part of date they represent. The LDML standard is here https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table

formaters for the year part of date reside in the year import directory.
months are in the month dir.
days are in the day dir.
weeks are in the week dir and etc.

To avoid capital latter conflicts on obsolite OS such as Windows udate always uses lowercase latters in import-pathes.

If the formater code is consisted of capital latters, you must write it in lower case and put "_" to the end.

Language specifics codes are subdevided in language subfolders.

For example. The LDML code for full name of month is MMMM. You to get the import path you must write it

``` js
import MMMM from 'udate/month/en/mmmm_';
```

In global import code of language is added before the formater code. In the next example we import two MMMM formatters for English and for Russian.
``` js
import { en_MMMM, ru_MMMM } 'udate';
```

### Simplifiled and "full-import"
# TODO choose good name for type of imports

1. Simplfiled - one line import Example:

ESM notation
``` js
import { dd, en_MMMM, yyyy } 'udate';
```

CommonJs / NodeJs notation

``` js
const { dd, en_MMMM, yyyy } = require('udate');
```

2. "full-import"

ESM notation
``` js
import format from 'udate/format';
import dd from 'udate/day';
import en_MMMM from 'udate/month/en/mmmm_';
import yyyy from 'udate/year;
```

CommonJs / NodeJs notation
``` js
const format = require('udate/format');
const dd = require('udate/day');
const en_MMMM = require('udate/month/en/mmmm_');
const yyyy = require('udate/year);
```

You can use 2 type of imports. Full and simplified. Which type is to use is up to you and depends on stack of you technologies. If you use classic nodejs with commonjs module, it might be better choose to use full-import, since it faster in this situation.

If you use nodejs with EMS module type or you target web using modern packer such as webpack/rollup you can whatever you like since tree-shacking works fine in the both situations.


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

## Benchmarck
We tested out simple date format: dd/MM/yyyy HH:mm:ss for all libraries. The result is here.

udate
momentjs
dayjs
datefn

as you may se udate is the fastest and bundle size is the smallest.

# TODO

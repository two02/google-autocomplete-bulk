# Google autocomplete bulk

google-autocomplete-bulk is a Nodejs package for dealing with Google autocomplete to scrape large quantities of suggestions.

## Installation

Use the [npm](https://www.npmjs.com/package/google-autocomplete-bulk) to install google-autocomplete-bulk.

```bash
npm i google-autocomplete-bulk
```

## Usage
### Without Proxy
```js
const Gauto = require('google-autocomplete-bulk');

async function main() {
  const results = await Gauto('quary', quntity);
  console.log(results);
}
```
### With Proxy
```js
const Gauto = require('google-autocomplete-bulk');

async function main() {
  const results = await Gauto('quary', quntity, 'proxy address', 'proxy port', 'proxy user', 'proxy password');
  console.log(results);
}
```
## Convert data to array
```js
let data = '[test1, test2, test3]';
let array = data
  .trim() 
  .substr(1,data.length-2) 
  .split(',') 
  .map(e=>e.trim()) 
  
console.log(array);
```

## Example
You can study our [examples](https://github.com/two02/google-autocomplete-bulk/tree/main/example) from our repository

## Contributing
Please open an [issue](https://github.com/two02/google-autocomplete-bulk/issues) first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
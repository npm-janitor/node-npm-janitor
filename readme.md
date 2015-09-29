# npm-janitor [![Build Status](https://travis-ci.org/hemanth/node-npm-janitor.svg?branch=master)](https://travis-ci.org/hemanth/node-npm-janitor)

> Validates `package.json` for all the user modules.


## Install

```sh
$ npm install --save npm-janitor
```


## Usage

```js
var npmJanitor = require('npm-janitor');

npmJanitor('hemanth', function(err, data){
  if(!err) console.log(data);
});

// data would be array of objects that look like:

/*
{ module: 'an-async',
  homepage: 'https://github.com/hemanth/node-an-async',
  info: 
   { valid: true,
     warnings: [ 'Missing recommended field: contributors' ],
     recommendations: 
      [ 'Missing optional field: dependencies',
        'Missing optional field: engines' ] } }
*/

```

## TODO

* Promisifiy stuff?

## License

MIT © [Hemanth.HM](http://h3manth.com)

underscore.powerpack
====================

Powerpack for underscore.js, created some utils which found useful in projects

## Setup
   
Clone the repo and run `npm install` to install npm dependecy. `npm test` or `testem` to run the tests
 
Test spec: mocha+chai+sinon+browserify+testem

PS. tests will fail in phantomjs, becuase it doesn't support Funciton.prototype.bind since it's build with QTwebkit. you can either polyfill the bind or just use a real browser (the .bind is used in the spec to validate params)

## API

- _.format(str) 
```js
_.format("<h1>%s, %s</h1>", "title", "1"); //= "<h1>title, 1 </h1>"
```

## Todo: 

- add detailed API doc 
- add CI

## Credits 
 
Testem with Mocha, Chai, Sinon setup http://www.kenpowers.net/blog/testing-in-browsers-and-node/
https://github.com/paulgrock/testem-blanket-mocha-chai-sinon-plato

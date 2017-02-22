mkdir test-demo
cd test-demo

npm init -y
yarn add --dev mocha chai

touh apple.js
mkdir test
touch test/apple_test.js

```js
// apple_test.js

const expect = require('chai').expect;
const apple = require('../apple');

describe('Apple', () => {
  it('should be an apple', () => {
    expect(apple()).to.equal('apple');
  })
})
```

```js
// apple.js

module.exports = function () {
  return 'apple';
}
```

```js
// package.json, set test to mocha

"test": "mocha"
```

Run the tests by typing "mocha" in cmd line

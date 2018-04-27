# Rate Limit Func

wrap a function to support rate limit

## Installation

```
npm install rate-limit-func
```

## Usage

``` ecmascript6
const rateLimitFunc = require('rate-limit-func')

async function func(arg1, arg2, ...) {
  ...
}

const limitedFunc = rateLimitFunc({
  interval: 1000, // milliseconds, default to 1000
  count: 1, // how many items will pass per interval, default to 1
})(func)

limitedFunc()
limitedFunc()
...
```

# License

MIT
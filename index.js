const buildSignal = require('rate-limit-signal')

function rateLimitFunc (options) {
  const signal = buildSignal(options)
  return function wrapFunc (func) {
    return async function wrappedFunc (...args) {
      await signal()
      return func(...args)
    }
  }
}

module.exports = rateLimitFunc
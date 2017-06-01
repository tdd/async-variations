# async-variations

A demo of various approaches to running async tasks in series, from plain callbacks to async-await.

1. Plain callbacks, using good ol' callback hell :meh:
2. Callbacks, flattened / made more manageable using [Async.js](https://caolan.github.io/async/)
3. Promise chain, using native ES2015 promise wrappers around the native callback-based API
4. Promises as synchronous-looking serial code using ES2017’s `async`/`await`


# api-request-prodio

Request is designed to be the simplest way possible to make http calls. It supports HTTPS also.

```js
var request = require('api-request-prodio');
const configData = {
    basePath : 'http://api-base-path'
}
const api = new requestSdk(configData);
```

## List of functionalities/features

- [Promises & Async/Await]
- [Custom HTTP Headers]
- [Timeout]
- [Callback]
- [Time logging]

- [Streaming]
- [Forms]
- [AWS S3 Upload]
- [Follow Redirects]
- [Interceptors]
- [Concurrent Requests]

- [Proxies]
- [TLS/SSL Protocol]
- [Cookies]

- [XMLHTTP Request]


## Promises & Async/Await

`api-request-prodio` supports callback interfaces, you can also use it to return a Promise instead. These wrappers can be useful if you prefer to work with Promises, or if you'd like to use `async`/`await` in ES2017.

```js
sample code comes here
```

## Custom HTTP Headers

Custom HTTP Headers can be set in the options object.

```js
sample code comes here
```

## Timeout

Integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request. Default value is 10 seconds.

```js
sample code comes here
```

## Callback

Pass the request's callback in the options object
The callback argument gets 3 arguments:
1. An `error` when applicable
2. An object (Response object)
3. The third is the `response` body (`String` or `Buffer` or `json`)

```js
sample code comes here
```

## Time logging

if `true`, the request-response cycle is logged in milliseconds. When set, the following properties are added to the response object:

- `startTime` Timestamp of the start of the request (in milliseconds).
- `endTime` Timestamp of the end of the request (in milliseconds).
- `totalTime` Timestamp of the entire request-response cycle (in milliseconds).

```js
sample code comes here
```

## Streaming

You can stream any response to a file stream.

```js
sample code comes here
```
You can also stream a file to a POST or GET request.

```js
sample code(to be changed)

fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))
```

## Forms

Supports `application/x-www-form-urlencoded` and `multipart/form-data` form uploads.
#### application/x-www-form-urlencoded (URL-Encoded Forms)
URL-encoded forms are simple.
```js
sample code comes here
```
#### multipart/form-data (Multipart Form Uploads)
For `multipart/form-data` we use the form-data module
```js
sample code comes here
```

## AWS S3 Upload

- requires AWS signing information. Should have the properties `key`, `secret`. Also requires the property `bucket`, unless you’re specifying your `bucket` as part of the path. AWS sign version 4 is the default is version. 

```js
sample code comes here
```

## Follow Redirects

HTTP response code 3xx will be considered as redirects (default is set to `true`).
```js
sample code comes here
```

## Interceptors

Intercept requests or responses before they are handled. 
```js
sample code comes here
```
If you need to remove an interceptor:
```js
sample code comes here
```

## Concurrent Requests

Performing multiple requests concurrently
```js
sample code comes here
```

## Proxies

## TLS/SSL Protocol

## Cookies

---

# csp-server
A sample server that accepts Content Security Policy reports, and prints them to the console

## Usage

### On a local machine
```bash
node index.js
```
The server will listen to port `3000` by default (can be set by environment variable `PORT`) for incoming `Content-Security-Policy` [report information](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#enabling_reporting)

### In a container
execute
```bash
docker build . -t csp-reporter
```
to build a server image, and then execute
```bash
doker run -p 3000:3000 csp-reporter
```
to start it up in a container.

Alternatively, you can just use our pre-built image:
```bash
docker run -p 3000:3000 quay.io/codefresh/csp-server
```
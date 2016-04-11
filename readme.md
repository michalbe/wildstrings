Wildstrings by [Michał Budzyński](https://github.com/michalbe)
=============
Obfuscating library for JS workshops

### What
Wildstring uses `String.prototype.link()` method to obfuscate strings to the form like this:
```
a='mclb'.link();a[3*6+2]+a[5*2+4]+a[6*3+3]+a[2*1+1]+a[4*6+2]+a[3*7+1]+a[2*11+1]+a[3*5+1]; // 'michalbe'
```

### Why
Just for fun.

### How to use
```
npm i wildstrings
```
then:
```
var ws = require('wildstrings');

console.log(ws('hello'));

```

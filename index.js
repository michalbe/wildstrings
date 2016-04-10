'use strict';

var letters = {};
var defaultString = ''.link();
var i = 0;
for (i = 0; i < defaultString.length; i++ ) {
  letters[defaultString[i]] = i;
}

console.log(letters);

var wildstrings = function(string) {
  console.log(string);
};

wildstrings('nosiema');

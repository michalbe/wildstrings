'use strict';

var letters = {};
var defaultString = ''.link();
var i = 0;
for (i = 0; i < defaultString.length; i++ ) {
  letters[defaultString[i]] = i;
}

console.log(letters);

var wildstrings = function(string) {
  var output = 'S=String.fromCharCode;a=\'siem\'.link();';
  for (var i = 0; i<string.length; i++) {
    if (letters[string[i].toLowerCase()] !== undefined) {
      output += 'a[' + letters[string[i].toLowerCase()] + ']+';
     }
  }

  console.log(output);
};

wildstrings('nosiema');

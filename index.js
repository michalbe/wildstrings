'use strict';

var letters = {};
var defaultString = ''.link();
var i = 0;
for (i = 0; i < defaultString.length; i++ ) {
  letters[defaultString[i]] = i;
}

var wildstrings = function(string) {
  var missingLetters = '';
  var output = 'S=String.fromCharCode;a=\'';
  var output2 = '\'.link();';
  for (var i = 0; i<string.length; i++) {
    if (letters[string[i].toLowerCase()] === undefined) {
      missingLetters += string[i].toLowerCase();
     }
  }
  //output += 'a[' + letters[string[i].toLowerCase()] + ']+';

  defaultString = missingLetters.link();
  for (i = 0; i < defaultString.length; i++ ) {
    letters[defaultString[i]] = i;
  }
  output += missingLetters;
  output += output2;
  for (i = 0; i<string.length; i++) {
    output += 'a[' + letters[string[i].toLowerCase()] + ']+';
  }

  console.log(output);
};

wildstrings('nosiema');

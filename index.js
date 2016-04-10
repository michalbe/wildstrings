'use strict';

var letters = {};
var defaultString = ''.link();
var i = 0;
for (i = 0; i < defaultString.length; i++ ) {
  letters[defaultString[i]] = i;
}

var gimmeNewNumberBasedOn = function(nmbr, a) {
  if (nmbr > a) {
    if (nmbr%a === 0) {
      return nmbr/a + '*' + a;
    } else {
      var mod = nmbr%a;
      return a + '*' + (nmbr - mod)/a + '+' + mod;
    }
  } else if (nmbr < a) {
    return a+nmbr + '-' + a;
  }
};

var wildstrings = function(string) {
  var missingLetters = '';
  var randomStarter = ~~(Math.random()*5)+2;
  // var output = 'u=' + randomStarter + ';S=String.fromCharCode;a=\'';
  var output = 'S=String.fromCharCode;a=\'';
  var output2 = '\'.link();';
  for (var i = 0; i<string.length; i++) {
    if (letters[string[i].toLowerCase()] === undefined) {
      missingLetters += string[i].toLowerCase();
     }
  }

  defaultString = missingLetters.link();
  letters = {};
  for (i = 0; i < defaultString.length; i++ ) {
    letters[defaultString[i]] = i;
  }
  output += missingLetters;
  output += output2;
  for (i = 0; i<string.length; i++) {
    output += 'a[' +
      gimmeNewNumberBasedOn(letters[string[i].toLowerCase()], randomStarter) +
      ']+';
    randomStarter =  ~~(Math.random()*5)+2;
  }
  output = output.split('');
  output.pop();
  return output.join('');
};

module.exports = wildstrings;

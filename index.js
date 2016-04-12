'use strict';

var letters = {};
var defaultString = ''.link();
var i = 0;
for (i = 0; i < defaultString.length; i++ ) {
  letters[defaultString[i]] = i;
}

var gimmeNewNumberBasedOf = function(nmbr, a) {
  var max = Math.max(nmbr, a);
  var min = Math.min(nmbr, a);
  console.log('input', nmbr, a);
  console.log('maxmin', max, min);
  if (max%min === 0) {
    return max/min + '*' + min;
  } else {
    var mod = max%min;
    return min + '*' + (max - mod)/min + '+' + mod;
  }

};
var wildstrings = function(string) {
  var missingLetters = '';
  var randomStarter = ~~(Math.random()*5)+2;
  var output = 'u=' + randomStarter + ';S=String.fromCharCode;a=\'';
  // var output = 'S=String.fromCharCode;a=\'';
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
    output += 'a[' +
      gimmeNewNumberBasedOf(letters[string[i].toLowerCase()], randomStarter) +
      ']+';
    randomStarter =  ~~(Math.random()*5)+2;
  }
  output = output.split('');
  output.pop();
  console.log(output.join(''));
};

wildstrings('no hej!');

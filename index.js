//Moment

const moment = require("moment");

console.log(moment().format('MMMM Do YYYY,h:mm:ss a')); //May 12th 2022,1:34:16 pm
console.log(moment().format('dddd'));//Thursday
console.log(moment().format('MMM Do YY'));//May 12th 22




console.log(moment("2020-01-01","YYYY MM DD").isValid()); 
console.log(moment("2020-14-01","YYYY MM DD").isValid());


console.log(moment().add(1, 'days').calendar()); 
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());

console.log(moment().subtract(7, 'days').calendar()); 
console.log(moment().subtract(7, 'months').calendar()); 
console.log(moment().subtract(7, 'years').calendar()); 


var a = moment([2014,11,11]);
var b = moment([2015,09,11]);
console.log(a.diff(b, 'days'));
console.log(a.from(b));

console.log(moment('2020-01-01').isAfter('2018-01-01')); // true

console.log(moment([2019]).isLeapYear()); 
console.log(moment([2020]).isLeapYear());

//Lodash


//Array Methods
let lodash=require('lodash');
let character=['a','b','c','d',false,0,null];
console.log(lodash.chunk(character, [size=1]));
console.log(lodash.compact(character));
console.log(lodash.concat(character,[1,2,4]));
console.log(lodash.difference(character, [1,2,4]));
console.log(lodash.drop(character, [n=4]));


//Collection methods

console.log(lodash.countBy([6.1, 4.2, 6.3], Math.floor));
console.log(lodash.every([true, 1, null, 'yes'], Boolean));


var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  console.log(lodash.filter(users, function(o) { return !o.active; }));
  console.log(lodash.find(users, function(o) { return o.age < 40; }));
  console.log(lodash.findLast([1, 2, 3, 4], function(n) {
    return n % 2 == 1;
  }));
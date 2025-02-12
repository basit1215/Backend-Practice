// Fundamentals of js
// arrays of object
// function return
// async js coding

// var arr = [1,2,3,4, "basit", {}, true,  function(){}, []]
// arr m num,string, func, boolean, arr, obj sab rakh sakty ha

var arr = [1, 2, 3, 4];

console.log(arr.length);

// arr ky lye ye aana chye
// forEach, map, filter, find, indexOf

// forEach loop

arr.forEach(function (item, index) {
  console.log(item + 12, index);
});

console.log(arr);

// map loop

var newArr = arr.map(function (item, index) {
  return item * 2;
});

console.log(newArr);

// filter loop

// var filteredArr = arr.filter(function(item, index){
//     return item % 2 === 0
// })

var filteredArr = arr.filter(function (item, index) {
  if (item > 2) {
    return true;
  } else {
    return false;
  } // sab condition false ho gaya toh item nhi nikal sakta hai
});

console.log(filteredArr);

// find loop

var findNum = arr.find(function (item, index) {
  return item === 3;
});

console.log(findNum);

// indexOf loop

var indexOfNum = arr.indexOf(3);

console.log(indexOfNum);

// reduce loop

// var sum = arr.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// object

var obj = {
  name: "Basit",
  age: 18,
  city: "karachi",
};

console.log(obj);

// accessing object properties

console.log(obj.name);
console.log(obj["age"]);

obj.age = 19;
console.log(obj.age);

// object ko update ya oski property yani value change hony sy rukta ha
Object.freeze(obj);

obj.age = 20;
console.log(obj.age);

// func ka length bhi nikal sakty ha , ye numbers of parameters length kehlati ha
// func are bascically object in javascript

// function abcd (a, b, c, d) {

// }

// console.log(abcd.length);

function abcd() {
  return "hello world";
}

var ans = abcd();
console.log(ans);

// line by line code chaly, isey kehty ha synchronous

// jo bhi code async nature ka ho, osey side stack me bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara sync code chal jaye, tab check karo ki async code complete hua ya nh and agar wo complete hua ho to osey main stack mein lagao and chala do.


async function abcd(){
 var blob = await fetch('https://randomuser.me/api')
 var ans = await blob.json()
 console.log(ans.results[0].name)
}

abcd()
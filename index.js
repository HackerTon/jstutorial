console.log("hello world");

var value = 10; // single variable
var array = [10, 10, 10, 10]; // array

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

function Sharon() {
  return "abc";
}

const SharonNew = () => {
  return "abc";
};

const Alan = console.log;
//Alan(Sharon());
//Alan(SharonNew());

var y = ["haha", 0, true, 9.123];
for (var i = 0; i < array.length; i++) {
  Alan(y[i]);
}

// function retArray(func) {
//   fetch("https://quotes.rest/qod")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       Alan(data);
//       var quotes = data["contents"]["quotes"];

//       console.log(func(question))
//       console.log(quotes);
//     });
// }

function iterate(array) {
  for (var i = 0; i < array.length; i++) {
    Alan(array[i]);
  }
}

//retArray(iterate);

// var dictionary = { abc: 123, alan: "stupid" };
// Alan(dictionary["abc"]);
// Alan(dictionary["alan"]);

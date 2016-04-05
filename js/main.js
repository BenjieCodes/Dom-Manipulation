var box1 = document.querySelector("#value-one");
var box2 = document.querySelector("#value-two");
var button = document.querySelector("#calculate-button");

button.addEventListener('click', function (event) {
  event.preventDefault();

  var solution = Number(box1.value) + Number(box2.value);
  answer.textContent = solution;

});

const one = document.getElementById("image-one");
const two = document.getElementById("image-two");
const three = document.getElementById("image-three");
const four = document.getElementById("image-four");
one.onclick = function () {
  one.classList.remove("obscured");
  one.classList.add("showing");
  two.classList.remove("showing");
  two.classList.add("obscured");
};
two.onclick = function () {
  two.classList.remove("obscured");
  two.classList.add("showing");
  one.classList.remove("showing");
  one.classList.add("obscured");
};
three.onclick = function () {
  three.classList.remove("obscured");
  three.classList.add("showing");
  four.classList.remove("showing");
  four.classList.add("obscured");
};
four.onclick = function () {
  four.classList.remove("obscured");
  four.classList.add("showing");
  three.classList.remove("showing");
  three.classList.add("obscured");
};

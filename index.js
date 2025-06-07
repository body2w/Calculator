const btns = document.querySelectorAll(".grid-element");
const monitor = document.querySelector(".monitor");
var arr = [];
btns.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML != "=" & element.innerHTML != "AC") {
      arr.push(element.innerHTML);
      monitor.innerHTML = arr.join("");
    } else if (element.innerHTML == "=") {
      monitor.innerHTML = eval(arr.join("").toString(10));
      arr = [eval(arr.join("").toString(10))];
    } else if (element.innerHTML == "AC") {
      monitor.innerHTML = " ";
      arr = [];
    }
  });
});

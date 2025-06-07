const btns = document.querySelectorAll(".grid-element");
const monitor = document.querySelector(".monitor");
var arr = [];
btns.forEach((element) => {
  element.addEventListener("click", () => {
    if ((element.innerHTML != "=") & (element.innerHTML != "AC")) {
      arr.push(element.innerHTML);
      if (arr[0] == 0) {
        arr.pop();
      }
      monitor.innerHTML = arr.join("");
    } else if (element.innerHTML == "=") {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/") {
          if (arr[i + 1] == 0) {
            arr[i + 1] = "";
            console.log(arr);
          }
        }
      }
      monitor.innerHTML = eval(arr.join(""));
      arr = [eval(arr.join(""))];
    } else if (element.innerHTML == "AC") {
      monitor.innerHTML = "";
      arr = [];
    }
  });
});

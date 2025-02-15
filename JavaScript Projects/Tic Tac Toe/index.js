let boxes = document.querySelectorAll(".box");
let reset_Button = document.querySelector("#reset");

let turnO = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
function checkWinner() {
  for (let pattern of winningPattern) {
    let pos_1 = boxes[pattern[0]].innerText;
    let pos_2 = boxes[pattern[1]].innerText;
    let pos_3 = boxes[pattern[2]].innerText;
    if (pos_1 != "" && pos_2 != "" && pos_3 != "") {
      if (pos_1 === pos_2 && pos_3 === pos_2) {
        console.log("winner:", pos_1);
      }
    }
  }
}

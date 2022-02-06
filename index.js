document.addEventListener("DOMContentLoaded", () => {
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  let isLastChecked = document.documentElement;

  function handleCheck(e) {
    let isBetween = false;
    if (e.shiftKey && this.checked) {
      checkBoxes.forEach((checkbox) => {
        if (checkbox === this || checkbox === isLastChecked) {
          isBetween = !isBetween;
        }
        if (isBetween) {
          checkbox.checked = true;
        }
      });
    }
    isLastChecked = this;
  }

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", handleCheck);
  });
});

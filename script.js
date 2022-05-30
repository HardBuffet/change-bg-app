window.onload = function () {
  const page = document.querySelector("[data-page]");
  const btn = document.querySelector("[data-btn]");
  page.addEventListener("keydown", addKey);
  page.addEventListener("click", changeBg);
  btn.addEventListener("click", changeBg);

  /* when enter key is pressed change bg */
  function addKey(e) {
    if (e.key === "Enter") changeBg();
  }

  // change BG
  function changeBg() {
    const bodyChildren = document.body.children;
    page.style.background = `rgb(${random()},${random()},${random()})`;

    // do not execute hideAllElemetns F if the body el doesn't have children
    if (bodyChildren.length > 0) hideAllElements(bodyChildren);
  }

  // get random number from 0 to 255
  function random() {
    const random = Math.floor(Math.random() * 255);
    return random;
  }

  // hide all children of the body element
  function hideAllElements(children) {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("hide");
    }
  }
};

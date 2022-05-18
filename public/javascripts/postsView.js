class postsView {
  constructor() {
    document.querySelectorAll("[type=submit]").forEach((submit) => {
      submit.addEventListener("click", () => {
        this.clearDisplay();
      });
    });
  }

  clearDisplay() {
    document.querySelector(".posts").remove();
  }
}

new postsView();

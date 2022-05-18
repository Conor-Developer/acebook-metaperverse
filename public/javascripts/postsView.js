class postsView {
  constructor() {
    const dataEl = document.querySelector(".data");

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

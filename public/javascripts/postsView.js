class postsView {
  constructor() {
    document.querySelectorAll("[type=button]").forEach((submit) => {
      submit.addEventListener("click", (event) => {
        const inputEl = document.querySelector("#message");

        const mainPostEl = document.querySelector(".posts");

        const newPostEl = document.createElement("div");
        newPostEl.classList.add("post");

        const postMessageEl = document.createElement("p");
        postMessageEl.classList.add("post-message");
        postMessageEl.textContent = inputEl.value;

        const dateEl = document.createElement("div");
        dateEl.id = "datestamp";
        dateEl.textContent = new Date();

        const likesEl = document.createElement("button");
        likesEl.id = "like-button";
        likesEl.textContent = "Like";

        const commentEl = document.createElement("form");
        const commentFieldEl = document.createElement("input");
        commentFieldEl.type = "text";
        const commentSubmitEl = document.createElement("button");
        commentSubmitEl.type = "button";
        commentSubmitEl.textContent = "Submit";

        commentEl.append(commentFieldEl);
        commentEl.append(commentSubmitEl);

        newPostEl.append(postMessageEl);
        newPostEl.append(dateEl);
        newPostEl.append(likesEl);
        newPostEl.append(commentEl);

        mainPostEl.prepend(newPostEl);

        // axios.post("/", { post: newPost });
      });
    });
  }

  // clearDisplay() {
  //   document.querySelector(".posts").remove();
  // }
}

new postsView();

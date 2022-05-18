class postsView {
  constructor() {
    document.querySelectorAll("[type=button]").forEach((submit) => {
      submit.addEventListener("click", () => {
        const userId = document.querySelector("#user").className;

        const userName = document.querySelector("#user").textContent;

        const inputEl = document.querySelector("#message");

        const mainPostEl = document.querySelector(".posts");

        const newPostEl = document.createElement("div");
        newPostEl.classList.add("post");

        const nameEl = document.createElement("p");
        nameEl.classList.add(userId);
        nameEl.textContent = userName;

        const postMessageEl = document.createElement("p");
        postMessageEl.classList.add("post-message");
        postMessageEl.textContent = inputEl.value;

        const dateEl = document.createElement("div");
        dateEl.id = "datestamp";

        let date = new Date();
        dateEl.textContent = `Created on ${date.toLocaleString("en-UK", {
          hour: "2-digit",
          minute: "2-digit",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`;

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

        newPostEl.append(nameEl);
        newPostEl.append(postMessageEl);
        newPostEl.append(dateEl);
        newPostEl.append(likesEl);
        newPostEl.append(commentEl);

        mainPostEl.prepend(newPostEl);

        // eslint-disable-next-line no-use-before-define
        /*eslint-disable */

        //suppress all warnings between comments

        axios.post("/posts", { message: inputEl.value, user: userId });

        inputEl.value = "";

        /*eslint-enable */
      });
    });
  }

  // clearDisplay() {
  //   document.querySelector(".posts").remove();
  // }
}

new postsView();

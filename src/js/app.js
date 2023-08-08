class OpenText {
  constructor() {
    this.collapseBtn = document.querySelector(".collapse-btn");
  }

  bTn() {
    this.collapseBtn.addEventListener("click", (e) => {
      let article = document.querySelector(".text-block");

      if (article.classList.contains("hide")) {
        article.classList.remove("hide");
      } else {
        article.classList.add("hide");
      }
    });
  }
}
new OpenText().bTn();

class Chat {
  constructor() {
    this.chatLogo = document.querySelector(".dialog-img");
    this.close = document.querySelector(".close");
  }
  openchat() {
    this.chatLogo.addEventListener("click", (e) => {
      document.querySelector(".viget").classList.add("hide-dialog");
      this.chatLogo.style.display = "none";
    });
    this.close.addEventListener("click", (e) => {
      document.querySelector(".viget").classList.remove("hide-dialog");
      this.chatLogo.style.display = "block";
    });
  }
}
new Chat().openchat();

class Liker {
  constructor() {
    this.likeContainer = document.querySelector(".like-container");
  }
  liker() {
    this.likeContainer.addEventListener("click", (e) => {
      let random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      let classLiker = ["straight", "left-liker", "right-liker"];
      this.likeContainer.insertAdjacentHTML(
        "afterbegin",
        `  <div class="heart ${classLiker[random]}"></div>`
      );

      this.delet();
    });
  }
  delet() {
    document
      .querySelector(".heart")
      .addEventListener("animationend", function (e) {
        e.target.remove();
      });
  }
}
new Liker().liker();

const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const image = document.querySelector(".slider-inner-section img");

const reviewText = document.querySelector(".review");
const studentAvatar = document.querySelector(".student");
const rolePosition = document.querySelector(".position");

let bit = true;

function changeContent() {
  if (bit) {
    reviewText.textContent = `"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`;
    studentAvatar.textContent = "John Tarkpor";
    rolePosition.textContent = "Junior Front-end Developer";
    image.src = "./images/image-john.jpg";
  } else {
    reviewText.textContent = `"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "`;
    studentAvatar.textContent = "Tanya Sinclair";
    rolePosition.textContent = "UX designer";
    image.src = "./images/image-tanya.jpg";
  }
  bit = !bit;
}

btnPrev.addEventListener("click", changeContent);
btnNext.addEventListener("click", changeContent);

document.addEventListener("keydown", (event) => {
  if (event.which === 37 || event.which === 39) {
    changeContent();
  }
});

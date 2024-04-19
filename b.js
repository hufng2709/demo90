const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const confirmation = document.querySelector("#confirmation"); // Lấy phần tử h3 cần ẩn

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Nguyễn Huy Hùng<br>MBBank 3450109112004"; // Sử dụng thẻ <br> để thêm dòng mới
  gif.src = "cccc.gif";
  confirmation.style.display = "none"; // Ẩn phần tử h3 khi nhấn vào nút "Đúng rồi"
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

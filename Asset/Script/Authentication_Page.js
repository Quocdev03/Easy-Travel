window.addEventListener("DOMContentLoaded", function () {
  activeTabAuthentication();
  showPass();
});
const activeTabAuthentication = () => {
  const loginBtn = document.querySelector(".login-section-login");
  const regBtn = document.querySelector(".login-section-register");
  const loginSection = document.querySelector(".authentication-login");
  const registerSection = document.querySelector(".authentication-register");

  regBtn.addEventListener("click", function () {
    // Active nút register
    regBtn.classList.add("active");
    // Xóa nút login
    loginBtn.classList.remove("active");

    // Hiện khung register
    registerSection.classList.remove("disable");
    // Ẩn khung login
    loginSection.classList.add("disable");
  });
  loginBtn.addEventListener("click", function () {
    // Xóa nút register
    regBtn.classList.remove("active");
    // Active nút login
    loginBtn.classList.add("active");

    // Ẩn khung register
    registerSection.classList.add("disable");
    // Hiện khung login
    loginSection.classList.remove("disable");
  });
};
const showPass = () => {
  const showBtn = document.querySelectorAll(".show-pass");
  const passInput = document.querySelectorAll(".form-input-password");
  showBtn.forEach((showBtn, index) => {
    showBtn.addEventListener("click", () => {
      const type = passInput[index].getAttribute("type");
      type === "password"
        ? passInput[index].setAttribute("type", "text")
        : passInput[index].setAttribute("type", "password");
    });
  });
};

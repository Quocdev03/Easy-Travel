window.addEventListener("DOMContentLoaded", function () {
  menuToggle();
  likeButton();
});
// Menu Toggle
const menuToggle = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const navigation = document.querySelector(".mb-nav");

  if (menuToggle && menuClose && navigation) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navigation.classList.add("is-show");
    });

    menuClose.addEventListener("click", (e) => {
      e.stopPropagation();
      navigation.classList.remove("is-show");
    });
    document.addEventListener("click", (e) => {
      if (!navigation.contains(e.target) && !e.target.matches(".menu-cloes")) {
        navigation.classList.remove("is-show");
      }
    });
  }
};

// Like Button
const likeButton = () => {
  const likeItem = document.querySelectorAll(".packages-like");

  likeItem.forEach((like, index) => {
    like.addEventListener("click", () => {
      like.classList.toggle("show-like");
      // Kiểm tra
      const likesState = JSON.parse(sessionStorage.getItem("likesState")) || [];
      // Tìm nút có chứa class và gán true false dựa vào index của class vào mảng session
      likesState[index] = like.classList.contains("show-like");
      // set lại mảng trong session
      sessionStorage.setItem("likesState", JSON.stringify(likesState));
    });
    // Lấy thông tin từ mảng
    const likesState = JSON.parse(sessionStorage.getItem("likesState")) || [];
    if (likesState[index]) {
      like.classList.add("show-like");
    }
  });
};

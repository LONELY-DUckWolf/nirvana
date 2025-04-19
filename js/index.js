const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll(".thumbs img");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.src = thumb.src;
      mainImg.style.opacity = 1;
    }, 200);

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});



  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });


  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


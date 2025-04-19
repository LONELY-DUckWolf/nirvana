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


  const purchaseBtn = document.getElementById("purchaseBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCartBtn = document.getElementById("closeCartBtn");

  purchaseBtn.addEventListener("click", () => {
    cartModal.classList.add("open");
  });

  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("open");
  });


  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove("open");
    }
  });

  const toggleDiscount = document.getElementById("toggleDiscount");
  const discountBody = document.getElementById("discountBody");
  const arrow = document.getElementById("arrow");

  toggleDiscount.addEventListener("click", () => {
    discountBody.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });


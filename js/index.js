
  const introText = document.getElementById("introText");
  const introScreen = document.getElementById("introScreen");
  const mainContent = document.getElementById("mainContent");

  const message = "Hello that’s Vacuum!";
  let index = 0;

  function typeEffect() {
    if (index < message.length) {
      introText.textContent += message[index];
      index++;
      const glitchDelay = Math.random() * (100 - 30) + 30;
      setTimeout(typeEffect, glitchDelay);
    } else {
      setTimeout(() => {
        introScreen.style.opacity = 0;
        setTimeout(() => {
          introScreen.style.display = "none";
          mainContent.classList.remove("hidden");
          mainContent.classList.add("visible");
        }, 1000);
      }, 800);
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });





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


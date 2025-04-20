
  const introText = document.getElementById("introText");
  const introScreen = document.getElementById("introScreen");
  const mainContent = document.getElementById("mainContent");

  const message = "Hello, that’s Vacuum!";
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



  setTimeout(() => {
    document.getElementById('ratingModal').classList.add('open');
    document.body.classList.add('modal-open');
  }, 1800000);

  const stars = document.querySelectorAll('.rating-stars span');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = star.getAttribute('data-rate');
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add('selected');
      }
    });
  });

  document.querySelector('.rating-submit').addEventListener('click', () => {
    if (selectedRating > 0) {
      alert(`Thanks for rating us ${selectedRating} stars!`);
      document.getElementById('ratingModal').classList.remove('open');
      document.body.classList.remove('modal-open');
    } else {
      alert('Please select a rating before submitting.');
    }
  });



  const register = document.querySelector(".register"),
      closeBtn = document.querySelector(".register-close"),
      saveBtn = document.querySelector(".register-button"),
      input = document.querySelector(".register-input"),
      greeting = document.querySelector(".login-btn");

document.body.classList.add("no-scroll"); 
closeBtn.addEventListener("click", closeModal);
saveBtn.addEventListener("click", saveName);

function closeModal() {
    register.classList.add("backdrop-hidden");
    document.body.classList.remove("no-scroll");
}

function saveName() {
    if (input.value.trim()) {
        
        greeting.textContent = `${input.value.trim()}`
        closeModal();
    } else {
        input.placeholder = "Please enter your name";
        input.classList.add("error");
    }
}
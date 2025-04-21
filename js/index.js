
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
      }, 4000);
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



  const openRegisterBtn = document.querySelector(".login-btn");
  const registerModal = document.querySelector(".register");
  const saveBtn = document.querySelector(".register-button");
  const closeBtn = document.querySelector(".register-close");
  const userNameBtn = document.querySelector(".login-btn");


  const emailTooltip = document.createElement("span");
  emailTooltip.classList.add("email-tooltip");
  emailTooltip.style.cssText = `
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: #fff;
    padding: 5px 10px;
    font-size: 12px;
    white-space: nowrap;
    border-radius: 6px;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10000;
  `;
  userNameBtn.style.position = 'relative';
  userNameBtn.appendChild(emailTooltip);


  openRegisterBtn.addEventListener("click", () => {
    registerModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    registerModal.style.display = "none";
  });

  saveBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("emailInput").value.trim();
  
    const allowedDomains = ["gmail.com", "hotmail.com", "ukr.net"];
    const emailParts = email.split("@");
  
    if (
      username &&
      emailParts.length === 2 &&
      allowedDomains.includes(emailParts[1].toLowerCase())
    ) {
      localStorage.setItem("vacuum_username", username);
      localStorage.setItem("vacuum_email", email);
  
      userNameBtn.textContent = username;
      emailTooltip.textContent = email;
  
      console.log("Email:", email);
  
      registerModal.style.display = "none";
    } else {
      alert("Please enter a valid email (e.g. @gmail.com, @hotmail.com, @ukr.net)");
    }
  });
  


  userNameBtn.addEventListener("mouseenter", () => {
    if (emailTooltip.textContent.trim() !== "") {
      emailTooltip.style.display = "block";
      setTimeout(() => emailTooltip.style.opacity = "1", 10);
    }
  });

  userNameBtn.addEventListener("mouseleave", () => {
    emailTooltip.style.opacity = "0";
    setTimeout(() => emailTooltip.style.display = "none", 300);
  });


  window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("vacuum_username");
    const savedEmail = localStorage.getItem("vacuum_email");

    if (savedName && savedEmail) {
      userNameBtn.textContent = savedName;
      emailTooltip.textContent = savedEmail;
    }
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





const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");



closeCartBtn.addEventListener("click", () => {
  cartModal.classList.remove("open");
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
});

const toggleDiscount = document.getElementById("toggleDiscount");
const discountBody = document.getElementById("discountBody");
const arrow = document.getElementById("arrow");

toggleDiscount.addEventListener("click", () => {
  discountBody.classList.toggle("open");
  arrow.classList.toggle("rotate");
});


const cartBtn = document.getElementById("cartBtn");


let cartItemCount = 2; 

if (cartItemCount > 0) {
  cartBtn.style.display = "block";
} else {
  cartBtn.style.display = "none";
}

cartBtn.addEventListener("click", () => {
  cartModal.classList.add("open");
  document.body.classList.add("modal-open");
});

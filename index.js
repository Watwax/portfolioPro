// Contact btns
const btnMail = document.getElementById('btn-mail');
const mail = document.getElementById('mail');
const btnTel = document.getElementById('btn-tel');
const tel = document.getElementById('tel');

btnMail.addEventListener('click', () => {
    mail.classList.toggle("show-contact")
    if(tel.classList.contains("show-contact")) {
      tel.classList.toggle("show-contact")
    }
});

btnTel.addEventListener('click', () => {
    tel.classList.toggle("show-contact")
    if(mail.classList.contains("show-contact")) {
      mail.classList.toggle("show-contact")
    }
});

// Project cards
const cards = document.querySelectorAll(".project-element");
const btnLeft = document.querySelector(".project-btn.left");
const btnRight = document.querySelector(".project-btn.right");
let current = 0;

function updateCarousel() {
    cards.forEach(card => card.className = "project-element"); // reset
    const prev = (current - 1 + cards.length) % cards.length;
    const next = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[prev].classList.add("prev");
    cards[next].classList.add("next");
}

btnLeft.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
});

btnRight.addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateCarousel();
});

updateCarousel(); // initial render

// Passions btns
const btnPassions = document.querySelectorAll(".passion-element")
btnPassions.forEach(btn => {
    btn.addEventListener("click", () => {
      btnPassions.forEach(btnOther => {
        if(btnOther.classList.contains("active")) {
          btnOther.classList.toggle("active");
        }
      });
      btn.classList.toggle("active");

      // Display description
      const bloc = document.getElementById(btn.id + "-info");
      const showedInfo = document.querySelector(".show")
      if(showedInfo !== null) {
          showedInfo.classList.toggle("show");
      }

      bloc.classList.toggle("show");
    });
});

const backToTopButton = document.getElementById('backToTop');

// Afficher/cacher le bouton en fonction du scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) { // 100vh
    backToTopButton.classList.add('show-arrow');
  } else {
    backToTopButton.classList.remove('show-arrow');
  }
});

// Action du bouton : remonter en douceur
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

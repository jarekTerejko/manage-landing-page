const form = document.querySelector(".footer__form");
console.log(form);
const mailInput = document.querySelector(".footer__email-input");
console.log(mailInput);

const msgContainer = document.querySelector(".footer__email-error");
console.log(msgContainer);

const isMailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const checkInput = () => {
  const mailValue = mailInput.value.trim();

  if (mailValue === "") {
    setErrorFor(mailInput, "Email cannot be blank...");
  } else if (!isMailValid(mailValue)) {
    setErrorFor(mailInput, "Please insert a valid email");
  } else {
    setSuccessFor(mailInput, "Submited successfully");
  }
};

const setErrorFor = (input, msg) => {
  input.className = "footer__email-input footer__email-input--error";
  msgContainer.className = "footer__email-error";
  msgContainer.textContent = msg;
};

const setSuccessFor = (input, msg) => {
  input.className = "footer__email-input";
  msgContainer.className = "footer__email-error footer__email-error--success";
  msgContainer.textContent = msg;
};

form.addEventListener("submit", (e) => {
  checkInput();
  // to prevent site from reload event if input is correct
  e.preventDefault();

  if (mailInput.classList.contains("footer__email-input--error")) {
    e.preventDefault();
  }
});

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

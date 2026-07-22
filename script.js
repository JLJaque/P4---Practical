const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const dateBadge = document.getElementById("dateBadge");
if (dateBadge) {
  const now = new Date();
  dateBadge.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let message = "Welcome!";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";
  greeting.textContent = message;
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill out all fields before submitting.";
      formMessage.className = "message error";
      return;
    }

    if (!email.includes("@")) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "message error";
      return;
    }

    formMessage.textContent = "Message sent successfully! (Demo only)";
    formMessage.className = "message success";
    contactForm.reset();
  });
}
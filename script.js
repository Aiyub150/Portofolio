const header = document.querySelector("[data-header]");

function updateHeader() {
  header.classList.toggle("is-solid", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

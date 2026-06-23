const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const googleCalendarBookingUrl = "";

if (window.lucide) {
  window.lucide.createIcons();
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

if (googleCalendarBookingUrl) {
  document.querySelectorAll(".consultation-link").forEach((link) => {
    link.setAttribute("href", googleCalendarBookingUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
}

const showMoreBtn = document.getElementById("showMoreTraining");
const extraTraining = document.getElementById("extraTraining");

showMoreBtn?.addEventListener("click", () => {
  extraTraining.classList.toggle("show");

  showMoreBtn.textContent = extraTraining.classList.contains("show")
    ? "Show Less"
    : "View All Training Programs";
});

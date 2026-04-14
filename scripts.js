document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".navbar-brand-container");
  if (!container) return;

  // Elements
  const logo = container.querySelector(".navbar-brand-logo");
  const title = container.querySelector(".navbar-brand:not(.navbar-brand-logo)");

  if (!logo || !title) return;

  // Create wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "brand-text-wrapper";

  // Create authors
  const authors = document.createElement("div");
  authors.className = "navbar-authors";
  authors.innerText = "Julio Andujar · Frank Fuentes · Oscar Pascual"; // <-- customize

  // Move title into wrapper
  wrapper.appendChild(title);
  wrapper.appendChild(authors);

  // Rebuild structure
  container.innerHTML = "";
  container.appendChild(logo);
  container.appendChild(wrapper);
});

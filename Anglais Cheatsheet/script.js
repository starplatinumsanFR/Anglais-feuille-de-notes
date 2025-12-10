function downloadSectionAsPDF(sectionId) {
  const body = document.body;
  const section = document.getElementById(sectionId);
  if (!section) return;

  const previous = document.querySelector(".print-target");
  if (previous) {
    previous.classList.remove("print-target");
  }

  section.classList.add("print-target");
  body.classList.add("printing-section");

  window.print();

  section.classList.remove("print-target");
  body.classList.remove("printing-section");
}

function toggleNav() {
  const nav = document.getElementById("sideNav");
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
}

function toggleNav(forceClose = false) {
  const nav = document.getElementById("sideNav");

  const isOpen = forceClose ? false : !nav.classList.contains("open");

  nav.classList.toggle("open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

document.addEventListener("click", (e) => {
  const nav = document.getElementById("sideNav");
  const toggleBtn = document.querySelector(".nav-toggle");

  if (nav.classList.contains("open") && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
    toggleNav(true);
  }
});

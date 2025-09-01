export default function menu() {
  const toggleBtn = document.querySelector<HTMLButtonElement>(
    ".js-menu-toggle-btn"
  );
  toggleBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });

  const menuNavLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".menu__nav-link")
  );
  menuNavLinks.forEach((navLink) => {
    navLink.addEventListener("mouseenter", (event) => {
      event.preventDefault();
      const id = navLink.hash;
      const section = document.querySelector<HTMLElement>(
        `.menu__section${id}`
      );
      console.log("Hash", id);
      if (section) {
        const allSections = Array.from(
          document.querySelectorAll(".menu__section")
        );
        menuNavLinks.forEach((link) => link.classList.remove("active"));
        allSections.forEach((section) => section.classList.remove("active"));
        section.classList.add("active");
        navLink.classList.add("active");
      }
    });
  });
}

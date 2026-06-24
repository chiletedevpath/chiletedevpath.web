if (typeof document !== "undefined") {
  const anio = document.querySelector("#anio");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  const botonMenu = document.querySelector(".menu-boton");
  const menuPrincipal = document.querySelector("#menu-principal");

  if (botonMenu && menuPrincipal) {
    const cerrarMenu = () => {
      menuPrincipal.classList.remove("menu-abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    };

    botonMenu.addEventListener("click", () => {
      const menuAbierto = menuPrincipal.classList.toggle("menu-abierto");

      botonMenu.setAttribute("aria-expanded", String(menuAbierto));
    });

    menuPrincipal.addEventListener("click", (evento) => {
      if (evento.target.tagName === "A") {
        cerrarMenu();
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        cerrarMenu();
      }
    });
  }
}

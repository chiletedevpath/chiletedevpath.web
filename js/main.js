if (typeof document !== "undefined") {
  document.documentElement.classList.add("js-activo");

  const anio = document.querySelector("#anio");
  const encabezado = document.querySelector(".encabezado");
  const enlacesMenu = document.querySelectorAll(".menu a[href^='#']");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  const actualizarEncabezado = () => {
    if (!encabezado) {
      return;
    }

    encabezado.classList.toggle("encabezado-desplazado", window.scrollY > 20);
  };

  actualizarEncabezado();
  window.addEventListener("scroll", actualizarEncabezado, { passive: true });

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

  const elementosAnimados = document.querySelectorAll(
    ".hero-texto, .hero-imagen, .hero-indicadores, .seccion .etiqueta, .seccion h2, .seccion-descripcion, .tarjeta, .ruta-etapa, .red-social"
  );

  elementosAnimados.forEach((elemento) => {
    elemento.classList.add("revelar");
  });

  if ("IntersectionObserver" in window) {
    const observadorAnimacion = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observadorAnimacion.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.14,
      }
    );

    elementosAnimados.forEach((elemento) => observadorAnimacion.observe(elemento));
  } else {
    elementosAnimados.forEach((elemento) => elemento.classList.add("visible"));
  }

  if ("IntersectionObserver" in window && enlacesMenu.length > 0) {
    const secciones = document.querySelectorAll("main section[id]");

    const observadorSecciones = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) {
            return;
          }

          enlacesMenu.forEach((enlace) => {
            enlace.classList.remove("enlace-activo");
            enlace.removeAttribute("aria-current");
          });

          const enlaceActivo = document.querySelector(
            `.menu a[href="#${entrada.target.id}"]`
          );

          if (enlaceActivo) {
            enlaceActivo.classList.add("enlace-activo");
            enlaceActivo.setAttribute("aria-current", "page");
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    secciones.forEach((seccion) => observadorSecciones.observe(seccion));
  }
}

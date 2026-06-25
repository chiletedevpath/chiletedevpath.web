if (typeof document !== "undefined") {
  document.documentElement.classList.add("js-activo");

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // El sitio sigue funcionando aunque el navegador no registre el modo offline.
      });
    });
  }

  const anio = document.querySelector("#anio");
  const encabezado = document.querySelector(".encabezado");
  const enlacesMenu = document.querySelectorAll(".menu a[href^='#']");
  const botonTema = document.querySelector("[data-theme-toggle]");
  const metaThemeColor = document.querySelector("meta[name='theme-color']");
  const preferenciaOscura = window.matchMedia("(prefers-color-scheme: dark)");

  const obtenerTemaInicial = () => {
    const temaGuardado = localStorage.getItem("cdp-theme");

    if (temaGuardado === "dark" || temaGuardado === "light") {
      return temaGuardado;
    }

    return preferenciaOscura.matches ? "dark" : "light";
  };

  const actualizarBotonTema = (tema) => {
    if (!botonTema) {
      return;
    }

    const icono = botonTema.querySelector(".tema-icono");
    const texto = botonTema.querySelector(".tema-texto");
    const esOscuro = tema === "dark";

    botonTema.setAttribute("aria-label", esOscuro ? "Cambiar a modo día" : "Cambiar a modo noche");

    if (icono) {
      icono.textContent = esOscuro ? "☀" : "☾";
    }

    if (texto) {
      texto.textContent = esOscuro ? "Día" : "Noche";
    }
  };

  const aplicarTema = (tema, guardar = true) => {
    document.documentElement.dataset.theme = tema;

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", tema === "dark" ? "#07151f" : "#f5f7f5");
    }

    actualizarBotonTema(tema);

    if (guardar) {
      localStorage.setItem("cdp-theme", tema);
    }
  };

  aplicarTema(obtenerTemaInicial(), false);

  if (botonTema) {
    botonTema.addEventListener("click", () => {
      const temaActual = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      aplicarTema(temaActual === "dark" ? "light" : "dark");
    });
  }

  preferenciaOscura.addEventListener("change", (evento) => {
    const temaGuardado = localStorage.getItem("cdp-theme");

    if (!temaGuardado) {
      aplicarTema(evento.matches ? "dark" : "light", false);
    }
  });

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
    ".hero-texto, .hero-visual, .hero-indicadores, .hero-marca-panel, .hero-strip, .page-hero-badges, .page-hero-acciones, .page-hero-stats, .identidad-media, .identidad-contenido, .identidad-puntos, .seccion .etiqueta, .seccion h2, .seccion-descripcion, .tarjeta, .ruta-etapa, .ruta-accion, .red-social, .politica-documento, .criterios-visual, .pie-cta"
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

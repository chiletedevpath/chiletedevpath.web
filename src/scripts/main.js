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

  const elementosAnimados = document.querySelectorAll(
    ".hero-texto, .hero-visual, .hero-indicadores, .hero-marca-panel, .identidad-media, .identidad-contenido, .identidad-puntos, .seccion .etiqueta, .seccion h2, .seccion-descripcion, .tarjeta, .ruta-etapa, .ruta-accion, .red-social, .politica-documento, .criterios-resumen, .pie-cta"
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

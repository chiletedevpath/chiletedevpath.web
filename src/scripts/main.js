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
  const panelesContacto = document.querySelectorAll("[data-contact-panel]");
  const correoContacto = document.querySelector("meta[name='cdp-email']")?.content ?? "";
  const whatsappContacto = document.querySelector("meta[name='cdp-whatsapp']")?.content ?? "";

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

  const obtenerValor = (panel, nombre) => {
    const campo = panel.querySelector(`[name="${nombre}"]`);
    return campo ? campo.value.trim() : "";
  };

  const construirMensaje = (panel) => {
    const contexto = panel.dataset.context || "Contacto Chilete DevPath";
    const nombre = obtenerValor(panel, "nombre") || "Sin nombre";
    const correo = obtenerValor(panel, "correo") || "Sin correo";
    const mensaje =
      obtenerValor(panel, "mensaje") ||
      obtenerValor(panel, "sugerencia") ||
      obtenerValor(panel, "motivo") ||
      "";
    const tema = obtenerValor(panel, "tema");
    const tipo = obtenerValor(panel, "tipo");

    return [
      `Contexto: ${contexto}`,
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      tema ? `Tema: ${tema}` : "",
      tipo ? `Tipo: ${tipo}` : "",
      `Mensaje: ${mensaje || "Sin mensaje"}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  panelesContacto.forEach((panel) => {
    const botonWhatsapp = panel.querySelector("[data-send-whatsapp]");
    const botonCorreo = panel.querySelector("[data-send-email]");

    botonWhatsapp?.addEventListener("click", () => {
      const mensaje = encodeURIComponent(construirMensaje(panel));
      const url = whatsappContacto
        ? `https://wa.me/${whatsappContacto}?text=${mensaje}`
        : `https://wa.me/?text=${mensaje}`;
      window.open(url, "_blank", "noopener");
    });

    botonCorreo?.addEventListener("click", () => {
      const asunto = encodeURIComponent(panel.dataset.context || "Contacto Chilete DevPath");
      const cuerpo = encodeURIComponent(construirMensaje(panel));
      window.location.href = `mailto:${correoContacto}?subject=${asunto}&body=${cuerpo}`;
    });
  });
}

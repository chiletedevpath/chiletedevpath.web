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
  const camposContables = document.querySelectorAll("[data-countable]");
  const metricasAnimadas = document.querySelectorAll("[data-count]");
  const filtrosRecursos = document.querySelectorAll("[data-resource-filter]");
  const tarjetasRecursos = document.querySelectorAll("[data-resource-category]");
  const filtrosProyectos = document.querySelectorAll("[data-project-filter]");
  const tarjetasProyectos = document.querySelectorAll("[data-project-card]");

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
    ".hero-texto, .hero-visual, .hero-indicadores, .dashboard-step, .dashboard-terminal, .identidad-media, .identidad-contenido, .identidad-puntos, .seccion .etiqueta, .seccion h2, .seccion-descripcion, .tarjeta, .ruta-etapa, .ruta-accion, .red-grupo, .red-social, .politica-documento, .criterios-resumen, .pie-cta"
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
    const asuntoDetalle = obtenerValor(panel, "asunto");
    const tema = obtenerValor(panel, "tema");
    const tipo = obtenerValor(panel, "tipo");

    return [
      `Contexto: ${contexto}`,
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      asuntoDetalle ? `Asunto: ${asuntoDetalle}` : "",
      tema ? `Tema: ${tema}` : "",
      tipo ? `Tipo: ${tipo}` : "",
      `Mensaje: ${mensaje || "Sin mensaje"}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  camposContables.forEach((campo) => {
    const contador = campo.closest("[data-contact-panel]")?.querySelector("[data-counter]");
    const limite = campo.getAttribute("maxlength") || "700";

    const actualizar = () => {
      if (contador) {
        contador.textContent = `${campo.value.length}/${limite}`;
      }
    };

    actualizar();
    campo.addEventListener("input", actualizar);
  });

  const animarNumero = (elemento) => {
    const destino = Number(elemento.dataset.count || elemento.textContent);

    if (!Number.isFinite(destino)) {
      return;
    }

    const duracion = 900;
    const inicio = performance.now();

    const pintar = (tiempo) => {
      const avance = Math.min((tiempo - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - avance, 3);
      elemento.textContent = String(Math.round(destino * suavizado));

      if (avance < 1) {
        requestAnimationFrame(pintar);
      }
    };

    requestAnimationFrame(pintar);
  };

  if ("IntersectionObserver" in window && metricasAnimadas.length > 0) {
    const observadorMetricas = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            animarNumero(entrada.target);
            observadorMetricas.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    metricasAnimadas.forEach((metrica) => observadorMetricas.observe(metrica));
  } else {
    metricasAnimadas.forEach(animarNumero);
  }

  filtrosRecursos.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      const categoria = filtro.dataset.resourceFilter;

      filtrosRecursos.forEach((item) => {
        item.classList.toggle("filtro-activo", item === filtro);
        item.setAttribute("aria-pressed", String(item === filtro));
      });

      tarjetasRecursos.forEach((tarjeta) => {
        const tags = (tarjeta.dataset.resourceTags || "").split(" ");
        const visible =
          categoria === "todos" ||
          tarjeta.dataset.resourceCategory === categoria ||
          tags.includes(categoria);
        tarjeta.hidden = !visible;
      });
    });
  });

  filtrosProyectos.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      const categoria = filtro.dataset.projectFilter;

      filtrosProyectos.forEach((item) => {
        item.classList.toggle("filtro-activo", item === filtro);
        item.setAttribute("aria-pressed", String(item === filtro));
      });

      tarjetasProyectos.forEach((tarjeta) => {
        const visible =
          categoria === "todos" || tarjeta.dataset.projectCategory === categoria;
        tarjeta.hidden = !visible;
      });
    });
  });

  panelesContacto.forEach((panel) => {
    const botonCorreo = panel.querySelector("[data-send-email]");

    botonCorreo?.addEventListener("click", () => {
      const camposInvalidos = [...panel.querySelectorAll("input, textarea, select")].filter(
        (campo) => !campo.checkValidity()
      );

      if (camposInvalidos.length > 0) {
        camposInvalidos[0].reportValidity();
        return;
      }

      const asunto = encodeURIComponent(panel.dataset.context || "Contacto Chilete DevPath");
      const cuerpo = encodeURIComponent(construirMensaje(panel));
      window.location.href = `mailto:${correoContacto}?subject=${asunto}&body=${cuerpo}`;
    });
  });
}

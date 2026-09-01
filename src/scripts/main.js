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
  const formulariosContacto = document.querySelectorAll("[data-contact-form]");
  const camposContables = document.querySelectorAll("[data-countable]");
  const metricasAnimadas = document.querySelectorAll("[data-count]");
  const filtrosRecursos = document.querySelectorAll("[data-resource-filter]");
  const tarjetasRecursos = document.querySelectorAll("[data-resource-category]");
  const exploradorProyectos = document.querySelector("[data-project-explorer]");
  const filtrosProyectos = document.querySelectorAll("[data-project-filter]");
  const opcionesProyectos = document.querySelectorAll("[data-project-option]");
  const panelesProyectos = document.querySelectorAll("[data-project-panel]");
  const busquedaProyectos = document.querySelector("[data-project-search]");
  const contadorProyectos = document.querySelector("[data-project-count]");
  const vacioProyectos = document.querySelector("[data-project-empty]");
  const puentesProyectos = document.querySelectorAll("[data-project-bridge]");
  const preferenciaMovimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
  const zonasMovimiento = document.querySelectorAll(".hero, .page-hero, .politica-documento");

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
    ".identidad-media, .identidad-contenido, .identidad-puntos, .seccion .etiqueta, .seccion h2, .seccion-descripcion, .tarjeta, .ruta-etapa, .ruta-accion, .red-grupo, .red-social, .politica-documento, .criterios-resumen, .pie-cta"
  );

  const secuenciaPorContenedor = new Map();

  elementosAnimados.forEach((elemento) => {
    const contenedor = elemento.parentElement;
    const posicion = secuenciaPorContenedor.get(contenedor) || 0;

    elemento.classList.add("revelar");
    elemento.classList.add(`revelar-retraso-${Math.min(posicion, 4)}`);
    secuenciaPorContenedor.set(contenedor, posicion + 1);
  });

  if (preferenciaMovimientoReducido.matches) {
    elementosAnimados.forEach((elemento) => elemento.classList.add("visible"));
  } else if ("IntersectionObserver" in window) {
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
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      }
    );

    elementosAnimados.forEach((elemento) => observadorAnimacion.observe(elemento));
  } else {
    elementosAnimados.forEach((elemento) => elemento.classList.add("visible"));
  }

  zonasMovimiento.forEach((zona) => zona.classList.add("movimiento-observable"));

  if (preferenciaMovimientoReducido.matches || !("IntersectionObserver" in window)) {
    zonasMovimiento.forEach((zona) => zona.classList.add("movimiento-activo"));
  } else {
    const observadorMovimiento = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          entrada.target.classList.toggle("movimiento-activo", entrada.isIntersecting);
        });
      },
      { rootMargin: "120px 0px", threshold: 0.02 }
    );

    zonasMovimiento.forEach((zona) => observadorMovimiento.observe(zona));
  }

  if (preferenciaMovimientoReducido.matches || !("IntersectionObserver" in window)) {
    puentesProyectos.forEach((puente) => puente.classList.add("puente-visible"));
  } else {
    const observadorPuente = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("puente-visible");
          observadorPuente.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 }
    );

    puentesProyectos.forEach((puente) => observadorPuente.observe(puente));
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

  const obtenerValor = (formulario, nombre) => {
    const campo = formulario.querySelector(`[name="${nombre}"]`);
    return campo ? campo.value.trim() : "";
  };

  const construirSolicitudContacto = (formulario) => ({
    context: formulario.dataset.context || "home",
    lang: formulario.dataset.lang || document.documentElement.lang || "es",
    name: obtenerValor(formulario, "nombre"),
    email: obtenerValor(formulario, "correo"),
    subject: obtenerValor(formulario, "asunto"),
    type: obtenerValor(formulario, "tipo"),
    topic: obtenerValor(formulario, "tema"),
    message:
      obtenerValor(formulario, "mensaje") ||
      obtenerValor(formulario, "sugerencia") ||
      obtenerValor(formulario, "motivo"),
    confirmation: formulario.querySelector('[name="confirmacion"]')?.checked === true,
    website: obtenerValor(formulario, "website"),
    turnstileToken: obtenerValor(formulario, "cf-turnstile-response"),
  });

  const enviarMensaje = async (formulario, payload) => {
    const controlador = new AbortController();
    const limiteEspera = window.setTimeout(() => controlador.abort(), 15000);
    let respuesta;

    try {
      respuesta = await fetch(formulario.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controlador.signal,
      });
    } finally {
      window.clearTimeout(limiteEspera);
    }

    const resultado = await respuesta.json().catch(() => ({}));
    if (!respuesta.ok) {
      const error = new Error("No se pudo procesar el formulario.");
      error.code = resultado.code || "DELIVERY_FAILED";
      error.status = respuesta.status;
      throw error;
    }
  };

  const obtenerEstadoFormulario = (formulario) => {
    let estado = formulario.querySelector("[data-form-status]");

    if (!estado) {
      estado = document.createElement("p");
      estado.className = "formulario-estado";
      estado.dataset.formStatus = "";
      estado.setAttribute("role", "status");
      estado.setAttribute("aria-live", "polite");
      formulario.querySelector(".acciones-formulario")?.append(estado);
    }

    return estado;
  };

  camposContables.forEach((campo) => {
    const contador = campo.closest("[data-contact-form]")?.querySelector("[data-counter]");
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

    if (preferenciaMovimientoReducido.matches) {
      elemento.textContent = String(destino);
      return;
    }

    const duracion = 900;
    const inicio = performance.now();

    const pintar = (tiempo) => {
      if (preferenciaMovimientoReducido.matches) {
        elemento.textContent = String(destino);
        return;
      }

      const avance = Math.min((tiempo - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - avance, 3);
      elemento.textContent = String(Math.round(destino * suavizado));

      if (avance < 1) {
        requestAnimationFrame(pintar);
      }
    };

    requestAnimationFrame(pintar);
  };

  if (!preferenciaMovimientoReducido.matches && "IntersectionObserver" in window && metricasAnimadas.length > 0) {
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

  const temporizadoresFiltro = new WeakMap();

  const actualizarTarjetaFiltrada = (tarjeta, debeMostrar) => {
    const temporizadorAnterior = temporizadoresFiltro.get(tarjeta);

    if (temporizadorAnterior) {
      window.clearTimeout(temporizadorAnterior);
    }

    tarjeta.classList.remove("filtro-entrando", "filtro-saliendo");

    if (preferenciaMovimientoReducido.matches) {
      tarjeta.hidden = !debeMostrar;
      return;
    }

    if (debeMostrar) {
      tarjeta.hidden = false;
      tarjeta.classList.add("filtro-entrando");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => tarjeta.classList.remove("filtro-entrando"));
      });
      return;
    }

    tarjeta.classList.add("filtro-saliendo");
    const temporizador = window.setTimeout(() => {
      tarjeta.hidden = true;
      tarjeta.classList.remove("filtro-saliendo");
      temporizadoresFiltro.delete(tarjeta);
    }, 180);
    temporizadoresFiltro.set(tarjeta, temporizador);
  };

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
        actualizarTarjetaFiltrada(tarjeta, visible);
      });
    });
  });

  let filtroProyectoActivo = "todos";
  let proyectoActivo = opcionesProyectos[0]?.dataset.projectOption ?? "";

  const activarProyecto = (projectId) => {
    proyectoActivo = projectId;

    opcionesProyectos.forEach((opcion) => {
      const estaActiva = opcion.dataset.projectOption === projectId;
      opcion.classList.toggle("explorador-opcion-activa", estaActiva);
      opcion.setAttribute("aria-selected", String(estaActiva));
      opcion.setAttribute("tabindex", estaActiva ? "0" : "-1");
    });

    panelesProyectos.forEach((panel) => {
      panel.hidden = panel.dataset.projectPanel !== projectId;
    });
  };

  const filtrarProyectos = () => {
    const consulta = busquedaProyectos?.value.trim().toLowerCase() ?? "";
    let visibles = 0;
    let primeraVisible = "";

    opcionesProyectos.forEach((opcion) => {
      const filtros = opcion.dataset.projectFilters?.split(" ") ?? [];
      const coincideFiltro = filtroProyectoActivo === "todos" || filtros.includes(filtroProyectoActivo);
      const coincideTexto = !consulta || (opcion.dataset.projectSearchText ?? "").includes(consulta);
      const visible = coincideFiltro && coincideTexto;

      opcion.hidden = !visible;
      if (visible) {
        primeraVisible ||= opcion.dataset.projectOption;
        visibles += 1;
      }
    });

    const opcionActivaVisible = [...opcionesProyectos].some(
      (opcion) => opcion.dataset.projectOption === proyectoActivo && !opcion.hidden
    );

    if (!opcionActivaVisible && primeraVisible) activarProyecto(primeraVisible);
    if (!primeraVisible) panelesProyectos.forEach((panel) => (panel.hidden = true));

    if (contadorProyectos) {
      const idiomaIngles = document.documentElement.lang === "en";
      contadorProyectos.textContent = idiomaIngles
        ? `${visibles} ${visibles === 1 ? "project" : "projects"} available`
        : `${visibles} ${visibles === 1 ? "proyecto disponible" : "proyectos disponibles"}`;
    }
    if (vacioProyectos) vacioProyectos.hidden = visibles !== 0;
  };

  opcionesProyectos.forEach((opcion) => {
    opcion.addEventListener("click", () => activarProyecto(opcion.dataset.projectOption));

    opcion.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) return;

      const opcionesVisibles = [...opcionesProyectos].filter((item) => !item.hidden);
      const indiceActual = opcionesVisibles.indexOf(opcion);
      const incremento = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1;
      const siguiente = opcionesVisibles[(indiceActual + incremento + opcionesVisibles.length) % opcionesVisibles.length];

      event.preventDefault();
      siguiente?.focus();
      if (siguiente) activarProyecto(siguiente.dataset.projectOption);
    });
  });

  filtrosProyectos.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      filtroProyectoActivo = filtro.dataset.projectFilter;

      filtrosProyectos.forEach((item) => {
        item.classList.toggle("filtro-activo", item === filtro);
        item.setAttribute("aria-pressed", String(item === filtro));
      });

      filtrarProyectos();
    });
  });
  busquedaProyectos?.addEventListener("input", filtrarProyectos);
  if (exploradorProyectos && proyectoActivo) activarProyecto(proyectoActivo);

  const mensajesFormulario = {
    es: {
      sending: "Enviando tu mensaje...",
      success: "Mensaje enviado. Recibirás una confirmación si el correo se procesó correctamente.",
      verification: "Completa la verificación humana antes de enviar.",
      unavailable: "El formulario aún no está habilitado. Falta configurar la verificación de producción.",
      rateLimited: "Se alcanzó el límite temporal de envíos. Inténtalo nuevamente más tarde.",
      invalid: "Revisa los datos ingresados e inténtalo nuevamente.",
      error: "No pudimos enviar tu mensaje. Inténtalo nuevamente en unos minutos.",
    },
    en: {
      sending: "Sending your message...",
      success: "Message sent. You will receive a confirmation if the email was processed successfully.",
      verification: "Complete the human verification before submitting.",
      unavailable: "The form is not enabled yet. Production verification still needs to be configured.",
      rateLimited: "The temporary submission limit was reached. Please try again later.",
      invalid: "Review the information entered and try again.",
      error: "We could not send your message. Please try again in a few minutes.",
    },
  };

  formulariosContacto.forEach((formulario) => {
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
      }

      const idioma = formulario.dataset.lang === "en" ? "en" : "es";
      const textos = mensajesFormulario[idioma];
      const estado = obtenerEstadoFormulario(formulario);
      const botonCorreo = formulario.querySelector('button[type="submit"]');
      const etiquetaOriginal = botonCorreo?.textContent || "";

      if (formulario.querySelector("[data-turnstile-pending]")) {
        estado.className = "formulario-estado formulario-estado-error";
        estado.textContent = textos.unavailable;
        return;
      }

      const payload = construirSolicitudContacto(formulario);
      if (!payload.turnstileToken) {
        estado.className = "formulario-estado formulario-estado-error";
        estado.textContent = textos.verification;
        return;
      }

      const campos = [...formulario.querySelectorAll("input, textarea, select, button")];

      if (botonCorreo) {
        botonCorreo.disabled = true;
        botonCorreo.setAttribute("aria-busy", "true");
        botonCorreo.textContent = idioma === "en" ? "Sending..." : "Enviando...";
      }
      campos.forEach((campo) => (campo.disabled = true));
      estado.className = "formulario-estado formulario-estado-enviando";
      estado.textContent = textos.sending;

      try {
        await enviarMensaje(formulario, payload);
        formulario.reset();

        formulario.querySelectorAll("[data-counter]").forEach((contador) => {
          const campo = formulario.querySelector("[data-countable]");
          contador.textContent = `0/${campo?.getAttribute("maxlength") || "700"}`;
        });

        estado.className = "formulario-estado formulario-estado-exito";
        estado.textContent = textos.success;
      } catch (error) {
        console.error("No se pudo enviar el formulario de contacto.", error);
        estado.className = "formulario-estado formulario-estado-error";
        estado.textContent = error.code === "RATE_LIMITED"
          ? textos.rateLimited
          : error.code === "INVALID_PAYLOAD"
            ? textos.invalid
            : error.code === "TURNSTILE_REJECTED"
              ? textos.verification
              : textos.error;
      } finally {
        campos.forEach((campo) => (campo.disabled = false));
        if (botonCorreo) {
          botonCorreo.disabled = false;
          botonCorreo.removeAttribute("aria-busy");
          botonCorreo.textContent = etiquetaOriginal;
        }
        const widget = formulario.querySelector(".cf-turnstile");
        if (widget && window.turnstile) window.turnstile.reset(widget);
      }
    });
  });
}

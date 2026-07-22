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
  const camposContables = document.querySelectorAll("[data-countable]");
  const metricasAnimadas = document.querySelectorAll("[data-count]");
  const filtrosRecursos = document.querySelectorAll("[data-resource-filter]");
  const tarjetasRecursos = document.querySelectorAll("[data-resource-category]");
  const filtrosProyectos = document.querySelectorAll("[data-project-filter]");
  const tarjetasProyectos = document.querySelectorAll("[data-project-card]");
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

  const emailJsConfig = {
    serviceId: "service_qtj5rkm",
    templateId: "template_qfaomfd",
    publicKey: "lVqMAbSHdWZlz4mUl",
  };

  const enviarMensaje = async (templateParams) => {
    const controlador = new AbortController();
    const limiteEspera = window.setTimeout(() => controlador.abort(), 15000);
    let respuesta;

    try {
      respuesta = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: templateParams,
        }),
        signal: controlador.signal,
      });
    } finally {
      window.clearTimeout(limiteEspera);
    }

    if (!respuesta.ok) {
      throw new Error(`EmailJS respondió con estado ${respuesta.status}`);
    }
  };

  const obtenerEstadoFormulario = (panel) => {
    let estado = panel.querySelector("[data-form-status]");

    if (!estado) {
      estado = document.createElement("p");
      estado.className = "formulario-estado";
      estado.dataset.formStatus = "";
      estado.setAttribute("role", "status");
      estado.setAttribute("aria-live", "polite");
      panel.querySelector(".acciones-formulario")?.append(estado);
    }

    return estado;
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

  filtrosProyectos.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      const categoria = filtro.dataset.projectFilter;

      filtrosProyectos.forEach((item) => {
        item.classList.toggle("filtro-activo", item === filtro);
        item.setAttribute("aria-pressed", String(item === filtro));
      });

      tarjetasProyectos.forEach((tarjeta) => {
        const visible =
          categoria === "todos" ||
          tarjeta.dataset.projectCategory === categoria ||
          tarjeta.dataset.projectRoute === categoria;
        actualizarTarjetaFiltrada(tarjeta, visible);
      });
    });
  });

  panelesContacto.forEach((panel) => {
    const botonCorreo = panel.querySelector("[data-send-email]");

    botonCorreo?.addEventListener("click", async () => {
      const camposInvalidos = [...panel.querySelectorAll("input, textarea, select")].filter(
        (campo) => !campo.checkValidity()
      );

      if (camposInvalidos.length > 0) {
        camposInvalidos[0].reportValidity();
        return;
      }

      const idiomaIngles = document.documentElement.lang === "en";
      const estado = obtenerEstadoFormulario(panel);
      const etiquetaOriginal = botonCorreo.textContent;
      const campos = [...panel.querySelectorAll("input, textarea, select")];
      const contexto = panel.dataset.context || "Contacto Chilete DevPath";

      botonCorreo.disabled = true;
      botonCorreo.setAttribute("aria-busy", "true");
      botonCorreo.textContent = idiomaIngles ? "Sending..." : "Enviando...";
      campos.forEach((campo) => (campo.disabled = true));
      estado.className = "formulario-estado formulario-estado-enviando";
      estado.textContent = idiomaIngles
        ? "Your message is being sent securely."
        : "Tu mensaje se está enviando de forma segura.";

      try {
        await enviarMensaje({
          name: obtenerValor(panel, "nombre"),
          email: obtenerValor(panel, "correo"),
          title: obtenerValor(panel, "asunto") || contexto,
          message: construirMensaje(panel),
        });

        campos.forEach((campo) => {
          if (campo instanceof HTMLInputElement && campo.type === "checkbox") {
            campo.checked = false;
          } else if (campo instanceof HTMLSelectElement) {
            campo.selectedIndex = 0;
          } else {
            campo.value = "";
          }
        });

        panel.querySelectorAll("[data-counter]").forEach((contador) => {
          const campo = contador.closest("[data-contact-panel]")?.querySelector("[data-countable]");
          contador.textContent = `0/${campo?.getAttribute("maxlength") || "700"}`;
        });

        estado.className = "formulario-estado formulario-estado-exito";
        estado.textContent = idiomaIngles
          ? "Message sent successfully. Check your inbox for the confirmation email."
          : "Mensaje enviado correctamente. Revisa tu bandeja de entrada para ver la confirmación.";
      } catch (error) {
        console.error("No se pudo enviar el formulario de contacto.", error);
        estado.className = "formulario-estado formulario-estado-error";
        estado.textContent = idiomaIngles
          ? "We could not send your message. Please try again in a moment."
          : "No pudimos enviar tu mensaje. Inténtalo nuevamente en unos minutos.";
      } finally {
        campos.forEach((campo) => (campo.disabled = false));
        botonCorreo.disabled = false;
        botonCorreo.removeAttribute("aria-busy");
        botonCorreo.textContent = etiquetaOriginal;
      }
    });
  });
}

import { GitBranch, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const normalizarRuta = (ruta) => (ruta === "/index.html" ? "/" : ruta);

export default function HeaderNav({
  navItems = [],
  currentPath = "/",
  githubHref = "https://github.com/chiletedevpath",
}) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [tema, setTema] = useState("light");

  useEffect(() => {
    const temaGuardado = localStorage.getItem("cdp-theme");
    const temaSistema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTema(temaGuardado || temaSistema);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    localStorage.setItem("cdp-theme", tema);

    const metaThemeColor = document.querySelector("meta[name='theme-color']");

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", tema === "dark" ? "#07151f" : "#f5f7f5");
    }
  }, [tema]);

  useEffect(() => {
    document.body.classList.toggle("nav-bloqueado", menuAbierto);

    return () => document.body.classList.remove("nav-bloqueado");
  }, [menuAbierto]);

  useEffect(() => {
    const cerrarConEscape = (evento) => {
      if (evento.key === "Escape") {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("keydown", cerrarConEscape);

    return () => document.removeEventListener("keydown", cerrarConEscape);
  }, []);

  const rutaActiva = normalizarRuta(currentPath);
  const esOscuro = tema === "dark";

  return (
    <nav className="navegacion contenedor" aria-label="Navegación principal">
      <a className="marca" href="/" onClick={() => setMenuAbierto(false)}>
        <span className="marca-logo" aria-hidden="true">
          <img src="/assets/img/marca-simbolo-nav.png" width="512" height="512" alt="" />
        </span>
        <span>Chilete DevPath</span>
      </a>

      <ul id="menu-principal" className={menuAbierto ? "menu menu-abierto" : "menu"}>
        {navItems.map((item) => {
          const estaActivo = item.href === rutaActiva;

          return (
            <li key={item.href}>
              <a
                className={estaActivo ? "enlace-activo" : undefined}
                href={item.href}
                aria-current={estaActivo ? "page" : undefined}
                onClick={() => setMenuAbierto(false)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="nav-acciones">
        <a className="nav-github" href={githubHref} target="_blank" rel="noopener">
          <GitBranch size={18} aria-hidden="true" />
          <span>GitHub</span>
        </a>

        <button
          className="tema-boton"
          type="button"
          aria-label={esOscuro ? "Cambiar a modo día" : "Cambiar a modo noche"}
          onClick={() => setTema(esOscuro ? "light" : "dark")}
        >
          <span className="tema-icono" aria-hidden="true">
            {esOscuro ? <Sun size={15} /> : <Moon size={15} />}
          </span>
          <span className="tema-texto">{esOscuro ? "Día" : "Noche"}</span>
        </button>

        <button
          className="menu-boton"
          type="button"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          {menuAbierto ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span>Menú</span>
        </button>
      </div>
    </nav>
  );
}

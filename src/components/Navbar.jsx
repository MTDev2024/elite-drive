import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 sticky top-0 z-50 bg-zinc-900 border-b border-zinc-700">
      <NavLink
        to="/"
        className="text-2xl font-bold tracking-[0.3em] text-white"
      >
        ELITE DRIVE
      </NavLink>

      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `tracking-widest uppercase ${isActive ? "text-amber-400" : "text-zinc-400"}`
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `tracking-widest uppercase ${isActive ? "text-amber-400" : "text-zinc-400"}`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/vehicules"
          className={({ isActive }) =>
            `tracking-widest uppercase ${isActive ? "text-amber-400" : "text-zinc-400"}`
          }
        >
          Véhicules
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `tracking-widest uppercase ${isActive ? "text-amber-400" : "text-zinc-400"}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

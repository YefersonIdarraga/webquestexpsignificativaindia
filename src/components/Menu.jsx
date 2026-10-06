import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Menu.css'

const Menu = () => {
  const routes = [
    { path: '/', label: 'Introducción' },
    { path: '/tarea', label: 'Tarea' },
    { path: '/proceso', label: 'Proceso' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/evaluacion', label: 'Evaluación' },
    { path: '/conclusion', label: 'Conclusión' },
    { path: '/creditos', label: 'Créditos' },
  ]

  return (
    <header className="navbar-fixed">
      <nav className="nav-container">
        <ul className="nav-list">
          {routes.map(({ path, label }) => (
            <li key={path} className="nav-item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Menu
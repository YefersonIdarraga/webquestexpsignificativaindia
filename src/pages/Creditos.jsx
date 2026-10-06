import React from 'react'
import Menu from '../components/Menu'
import '../styles/Creditos.css'

const Creditos = () => {
  const creadores = [
    'Liseth Del Socorro Méndez Zapa',
    'Omar Yesid Mosquera Mosquera',
    'Yefferson Murillo Mosquera'
  ]

  return (
    <div className="creditos-page">
      <Menu />

      <main className="creditos-container">
        {/* Banner de encabezado */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Créditos</h1>
            <p className="hero-subtitle">
              Reconocimientos institucionales, académicos y de autoría
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Créditos institucionales y académicos"
              className="hero-image"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <section className="content-wrapper">
          <div className="creditos-grid">
            {/* Tarjeta de Creadores */}
            <article className="creditos-card highlight-card">
              <h2 className="card-heading">Creadores de la WebQuest</h2>
              <ul className="creadores-list">
                {creadores.map((nombre, idx) => (
                  <li key={idx} className="creador-item">
                    <span className="bullet-icon">•</span>
                    <span className="creador-nombre">{nombre}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Tarjeta de Experiencia Significativa */}
            <article className="creditos-card">
              <h2 className="card-heading">Experiencia Significativa</h2>
              <p className="card-text">
                <strong>DIKSHA</strong> – Digital Infrastructure for Knowledge Sharing, iniciativa del National Council of Educational Research and Training (NCERT), Ministerio de Educación del Gobierno de India.
              </p>
            </article>

            {/* Tarjeta de Propuesta Educativa */}
            <article className="creditos-card">
              <h2 className="card-heading">Propuesta Educativa Articulada</h2>
              <p className="card-text">
                <strong>Ruta Matemática: De la Primaria a la Secundaria</strong>, experiencia interactiva desarrollada en Genially.
              </p>
            </article>

            {/* Tarjeta de Apoyo Multimedia */}
            <article className="creditos-card">
              <h2 className="card-heading">Apoyo Visual y Multimedia</h2>
              <p className="card-text">
                Imágenes y video generados con inteligencia artificial mediante Gemini (Google), 2026.
              </p>
            </article>
          </div>

          {/* Pie institucional */}
          <footer className="institution-footer">
            <div className="footer-badge">
              <span className="univ-title">Universidad Pontificia Bolivariana</span>
              <span className="univ-year">2026</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default Creditos
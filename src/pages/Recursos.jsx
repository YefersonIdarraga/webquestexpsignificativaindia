import React from 'react'
import Menu from '../components/Menu'
import '../styles/Recursos.css'

const Recursos = () => {
  const recursosLinks = [
    {
      title: 'Recurso principal – DIKSHA',
      description: 'Portal oficial de la infraestructura digital nacional para compartir conocimiento.',
      url: 'https://www.indiastack.global/spanish-diksha/',
      tag: 'Plataforma Principal',
      type: 'link'
    },
    {
      title: 'Recurso de articulación – Ruta Matemática',
      description: 'Experiencia interactiva en Genially de primaria a secundaria.',
      url: 'https://view.genially.com/6a7a77f1e97c5d44a1904263',
      tag: 'Interactividad Genially',
      type: 'link'
    }
  ]

  const recursosDocs = [
  {
    title: 'Mapa conceptual',
    description: 'Estructura visual que sintetiza la articulación entre inclusión digital y competencias matemáticas.',
    fileUrl: '/MAPA CONCEPTUAL BRECHAS DIGITALES.pdf',
    tag: 'Esquema Visual'
  },
  {
    title: 'Fichaje Experiencias Significativas en Asia',
    description: 'Documento de análisis pedagógico y sistematización de la experiencia DIKSHA.',
    fileUrl: '/Fichaje experiencias significativas Asia.pdf', // Ajusta según el nombre exacto de tu archivo local
    tag: 'Sistematización'
  }
]

  return (
    <div className="recursos-page">
      <Menu />

      <main className="recursos-container">
        {/* Banner de encabezado */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Recursos</h1>
            <p className="hero-subtitle">
              Materiales, enlaces y herramientas de la WebQuest
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
              alt="Plataforma de recursos educativos DIKSHA"
              className="hero-image"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <section className="content-wrapper">
          {/* Sección de Video Explicativo */}
          <article className="resource-section">
            <h2 className="section-title">Video explicativo de esta WebQuest</h2>
              <div className="video-container">
                <video controls className="video-player">
                  <source src="/Presentacion WebQuest Asia.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
          </article>

          {/* Enlaces Principales */}
          <article className="resource-section">
            <h2 className="section-title">Enlaces y Plataformas</h2>
            <div className="resources-grid">
              {recursosLinks.map((item, index) => (
                <div key={index} className="resource-card link-card">
                  <span className="card-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-button"
                  >
                    Acceder al recurso
                  </a>
                </div>
              ))}
            </div>
          </article>

          {/* Documentos y Fichas */}
          <article className="resource-section">
            <h2 className="section-title">Documentos y Material Complementario</h2>
            <div className="resources-grid">
              {recursosDocs.map((item, index) => (
                <div key={index} className="resource-card doc-card">
                  <span className="card-tag doc-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={encodeURI(item.fileUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-button"
                  >
                    Consultar documento
                  </a>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Recursos
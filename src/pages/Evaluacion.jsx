import React from 'react'
import Menu from '../components/Menu'
import '../styles/Evaluacion.css'

const Evaluacion = () => {
  const rubrica = [
    {
      criterio: 'Exploración de DIKSHA',
      excelente: 'Identifica claramente sus características y aportes.',
      satisfactorio: 'Reconoce sus principales características.',
      enProceso: 'Presenta información limitada.'
    },
    {
      criterio: 'Análisis de inclusión digital',
      excelente: 'Explica claramente su relación con la inclusión.',
      satisfactorio: 'Establece una relación básica.',
      enProceso: 'La relación es poco clara.'
    },
    {
      criterio: 'Articulación con Ruta Matemática',
      excelente: 'Integra ambas experiencias de manera coherente.',
      satisfactorio: 'Relaciona algunos elementos.',
      enProceso: 'Presenta poca articulación.'
    },
    {
      criterio: 'Formación ciudadana',
      excelente: 'Identifica competencias para una ciudadanía digital responsable.',
      satisfactorio: 'Reconoce algunos aportes.',
      enProceso: 'Presenta dificultades para establecer relaciones.'
    },
    {
      criterio: 'Producto final',
      excelente: 'Es claro, creativo, organizado y argumentado.',
      satisfactorio: 'Es comprensible y organizado.',
      enProceso: 'Requiere mayor claridad y organización.'
    }
  ]

  return (
    <div className="evaluacion-page">
      <Menu />

      <main className="evaluacion-container">
        {/* Banner de encabezado */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Evaluación</h1>
            <p className="hero-subtitle">
              Rúbrica de valoración para el seguimiento del aprendizaje
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
              alt="Evaluación y rúbrica pedagógica"
              className="hero-image"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <section className="content-wrapper">
          <div className="table-responsive">
            <table className="rubric-table">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th>Excelente</th>
                  <th>Satisfactorio</th>
                  <th>En proceso</th>
                </tr>
              </thead>
              <tbody>
                {rubrica.map((item, index) => (
                  <tr key={index}>
                    <td className="criterio-cell">{item.criterio}</td>
                    <td className="level-cell excelente">{item.excelente}</td>
                    <td className="level-cell satisfactorio">{item.satisfactorio}</td>
                    <td className="level-cell en-proceso">{item.enProceso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards visibles únicamente en móviles para mejorar la legibilidad */}
          <div className="rubric-mobile">
            {rubrica.map((item, index) => (
              <article key={index} className="mobile-rubric-card">
                <h3>{item.criterio}</h3>
                <div className="mobile-level excelente-border">
                  <span className="badge excelente-badge">Excelente</span>
                  <p>{item.excelente}</p>
                </div>
                <div className="mobile-level satisfactorio-border">
                  <span className="badge satisfactorio-badge">Satisfactorio</span>
                  <p>{item.satisfactorio}</p>
                </div>
                <div className="mobile-level proceso-border">
                  <span className="badge proceso-badge">En proceso</span>
                  <p>{item.enProceso}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Evaluacion
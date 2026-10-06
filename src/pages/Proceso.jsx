import React from 'react'
import Menu from '../components/Menu'
import '../styles/Proceso.css'

const Proceso = () => {
  const steps = [
    {
      number: '01',
      title: 'Explorar DIKSHA',
      description:
        'Ingresar al portal y reconocer su propósito, usuarios, recursos y posibilidades educativas.',
      tag: 'Exploración Inicial'
    },
    {
      number: '02',
      title: 'Identificar sus aportes',
      description:
        'Registrar ejemplos de cómo la plataforma facilita el acceso a contenidos, recursos y experiencias de aprendizaje.',
      details: [
        'Libros de texto enriquecidos',
        'Formación docente',
        'Cuestionarios interactivos',
        'Creación y consumo de contenidos',
        'Herramientas de colaboración',
        'Recursos multilingües'
      ],
      tag: 'Análisis de Recursos'
    },
    {
      number: '03',
      title: 'Explorar la Ruta Matemática',
      description:
        'Ingresar a “Ruta Matemática: De la Primaria a la Secundaria” y realizar las actividades propuestas en sus diferentes misiones. La experiencia plantea un recorrido interactivo para conectar conocimientos matemáticos previos con aprendizajes de secundaria.',
      tag: 'Experiencia Interactiva'
    },
    {
      number: '04',
      title: 'Relacionar las experiencias',
      description:
        'Comparar DIKSHA y la Ruta Matemática considerando los siguientes ejes clave:',
      criteria: [
        'Acceso al conocimiento',
        'Uso educativo de la tecnología',
        'Aprendizaje autónomo',
        'Interactividad',
        'Desarrollo de competencias',
        'Participación y ciudadanía digital'
      ],
      tag: 'Análisis Comparativo'
    },
    {
      number: '05',
      title: 'Crear el producto final',
      description:
        'Diseñar una “Mini Ruta Matemática” relacionada con la vida cotidiana del contexto inmediato de los estudiantes.',
      isHighlight: true,
      tag: 'Cierre del Proyecto'
    }
  ]

  return (
    <div className="proceso-page">
      <Menu />

      <main className="proceso-container">
        {/* Banner con título arriba e imagen debajo */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Proceso</h1>
            <p className="hero-subtitle">
              Paso a paso para el desarrollo de la WebQuest
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
            alt="Estudiantes desarrollando actividades educativas digitales"
            className="hero-image"
          />
        </header>

        {/* Contenido en pasos/timeline */}
        <section className="content-wrapper">
          <div className="process-timeline">
            {steps.map((step, index) => (
              <article
                key={index}
                className={`process-card ${step.isHighlight ? 'highlight-card' : ''}`}
              >
                <div className="card-header">
                  <span className="step-badge">{step.tag}</span>
                  <span className="step-number">{step.number}</span>
                </div>

                <h2>{step.title}</h2>
                <p className="step-description">{step.description}</p>

                {/* Sublista de aportes de DIKSHA */}
                {step.details && (
                  <div className="sublist-wrapper">
                    <h3>Posibilidades ofrecidas por DIKSHA:</h3>
                    <ul className="details-grid">
                      {step.details.map((item, idx) => (
                        <li key={idx} className="details-item">
                          <span className="bullet-point"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Criterios de comparación */}
                {step.criteria && (
                  <div className="sublist-wrapper">
                    <h3>Criterios de comparación:</h3>
                    <div className="criteria-tags">
                      {step.criteria.map((criterion, idx) => (
                        <span key={idx} className="criterion-tag">
                          {criterion}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Proceso
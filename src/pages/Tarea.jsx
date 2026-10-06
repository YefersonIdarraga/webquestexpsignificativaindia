import React from 'react'
import Menu from '../components/Menu'
import '../styles/Tarea.css'

const Tarea = () => {
  const reqItems = [
    { title: 'Situación o Problema', desc: 'Relacionado directamente con la vida cotidiana y el contexto inmediato.' },
    { title: 'Pregunta o Desafío', desc: 'Planteamiento matemático claro que estimule la toma de decisiones.' },
    { title: 'Pistas e Información', desc: 'Datos y recursos necesarios para guiar la resolución.' },
    { title: 'Procedimiento o Estrategia', desc: 'Paso a paso lógico de la propuesta de solución.' },
    { title: 'Respuesta y Explicación', desc: 'Conclusión justificada de manera breve y clara.' }
  ]

  return (
    <div className="tarea-page">
      <Menu />

      <main className="tarea-container">
        {/* Encabezado con título arriba y la imagen debajo */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Tarea</h1>
            <p className="hero-subtitle">Construyamos nuestra Ruta Matemática</p>
          </div>
          <img
            src="https://colombiaaprende.edu.co/sites/default/files/files_public/imagen_recurso/EDIT_FINAL.png"
            alt="Estudiantes trabajando en proyectos interactivos"
            className="hero-image"
          />
        </header>

        {/* Contenido principal */}
        <section className="content-wrapper">
          {/* Tarjeta de exploración previa */}
          <article className="task-card intro-task">
            <p className="paragraph-lead">
              Explorar el portal <strong>DIKSHA</strong> y analizar cómo sus posibilidades educativas pueden relacionarse con la <strong>Ruta Matemática de Genially</strong>.
            </p>
          </article>

          {/* El reto principal */}
          <article className="challenge-section">
            <div className="challenge-header">
              <h2>El Reto: Construyamos Nuestra Ruta Matemática</h2>
              <p>
                Después de realizar el recorrido por <strong>“Ruta Matemática: De la Primaria a la Secundaria”</strong>, los estudiantes asumirán el reto de convertirse en diseñadores de una nueva ruta matemática.
              </p>
              <p>
                De manera individual o en equipos, deberán seleccionar un contenido matemático trabajado durante el recorrido y transformarlo en un reto interactivo relacionado con una situación de la vida cotidiana. El desafío deberá permitir que otros estudiantes pongan en práctica sus conocimientos para resolver una situación, tomar una decisión o encontrar una solución.
              </p>
            </div>

            {/* Requisitos del reto */}
            <div className="requirements-wrapper">
              <h3>El reto deberá incluir:</h3>
              <ul className="requirements-list">
                {reqItems.map((item, index) => (
                  <li key={index} className="requirement-item">
                    <span className="req-number">{index + 1}</span>
                    <div className="req-text">
                      <strong>{item.title}:</strong> {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Producto Final */}
          <article className="product-card">
            <h3>Producto Final</h3>
            <p>
              Una <strong>“Mini Ruta Matemática”</strong> relacionada con la vida cotidiana del contexto inmediato de los estudiantes.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Tarea
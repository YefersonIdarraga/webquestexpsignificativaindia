import React from 'react'
import Menu from '../components/Menu'
import '../styles/Introduccion.css' // Importa los estilos para la página

const Introduccion = () => {
  return (
    <div className="introduccion-page">
      <Menu />

      <main className="introduccion-container">
        {/* Banner principal a todo el ancho */}
        <section className="hero-banner">
          <div className="hero-overlay">
            <h1>Introducción</h1>
            <p className="hero-subtitle">
              Inclusión Digital y Formación Ciudadana
            </p>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYDtxwzZOgJ8_3IXA4eLLgC193eE8TStKzm_0P1euo2ews0QwoKuXGW0&s=10"
            alt="Plataforma de Educación Digital e Inclusión"
            className="hero-image"
          />
        </section>

        {/* Contenido explicativo responsivo */}
        <section className="content-wrapper">
          <div className="intro-card lead-card">
            <p className="paragraph-lead">
              La <strong>inclusión digital</strong> implica garantizar oportunidades para acceder, utilizar y aprovechar las tecnologías con propósitos educativos. En este sentido, <strong>DIKSHA</strong> (<em>Digital Infrastructure for Knowledge Sharing</em>) constituye una experiencia significativa de la India, desarrollada como plataforma nacional para la educación escolar y orientada a facilitar experiencias de aprendizaje mediante recursos y herramientas digitales.
            </p>
          </div>

          <div className="grid-two-columns">
            <div className="info-box route-box">
              <h2>Ruta Matemática</h2>
              <p>
                Esta WebQuest propone explorar DIKSHA y relacionarlo con <strong>“Ruta Matemática: De la Primaria a la Secundaria”</strong>, una propuesta interactiva diseñada para estudiantes de 12 a 14 años que conecta aprendizajes matemáticos de primaria con nuevos retos de secundaria.
              </p>
            </div>

            <div className="info-box purpose-box">
              <h2>Propósito</h2>
              <p>
                El propósito es reflexionar sobre cómo los recursos digitales pueden favorecer aprendizajes significativos, fortalecer competencias digitales y contribuir a una formación ciudadana crítica, participativa y responsable.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Introduccion
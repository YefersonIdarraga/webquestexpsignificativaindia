import React from 'react'
import Menu from '../components/Menu'
import '../styles/Conclusion.css'

const Conclusion = () => {
  const conclusiones = [
    {
      numero: '01',
      titulo: 'Infraestructura y Acceso Digital',
      texto:
        'DIKSHA demuestra cómo una infraestructura digital puede ampliar las oportunidades de aprendizaje y facilitar el acceso a recursos educativos para diferentes actores del sistema escolar.'
    },
    {
      numero: '02',
      titulo: 'Transformación del Aprendizaje',
      texto:
        'Su articulación con Ruta Matemática permite comprender que las herramientas digitales pueden transformar los contenidos escolares en experiencias interactivas, favoreciendo la autonomía, la participación y el desarrollo de competencias.'
    },
    {
      numero: '03',
      titulo: 'Inclusión y Ciudadanía Digital',
      texto:
        'La experiencia invita a reconocer que la inclusión digital no consiste únicamente en disponer de tecnología, sino en garantizar que esta pueda utilizarse para aprender, resolver problemas, comunicarse, participar y ejercer una ciudadanía responsable en los entornos digitales.'
    }
  ]

  return (
    <div className="conclusion-page">
      <Menu />

      <main className="conclusion-container">
        {/* Banner de encabezado */}
        <header className="hero-banner">
          <div className="hero-overlay">
            <h1>Conclusiones</h1>
            <p className="hero-subtitle">
              Reflexiones pedagógicas sobre inclusión, tecnología y aprendizaje
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Reflexiones sobre educación digital e inclusión"
              className="hero-image"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <section className="content-wrapper">
          <div className="conclusiones-grid">
            {conclusiones.map((item) => (
              <article key={item.numero} className="conclusion-card">
                <span className="card-number">{item.numero}</span>
                <h3 className="card-title">{item.titulo}</h3>
                <p className="card-text">{item.texto}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Conclusion
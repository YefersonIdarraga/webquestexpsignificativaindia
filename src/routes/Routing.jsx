import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Introduccion from '../pages/Introduccion';
import Tarea from '../pages/Tarea';
import Proceso from '../pages/Proceso';
import Recursos from '../pages/Recursos';
import Evaluacion from '../pages/Evaluacion';
import Conclusion from '../pages/Conclusion';
import Creditos from '../pages/Creditos';



const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="/tarea" element={<Tarea />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/creditos" element={<Creditos />} />
    </Routes>
  )
}

export default Routing
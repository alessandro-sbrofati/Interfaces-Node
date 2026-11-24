import { useState } from 'react'

import './App.css'
import Header from './assets/componentes/Header'
import Producto2 from './assets/componentes/Producto2'
import Producto from './assets/componentes/Producto'
import TarjetaBienvenida from './assets/componentes/TarjetaBienvenida'
import BarraProgreso from './assets/componentes/BarraProgreso'
import AlertBox from './assets/componentes/AlertBox'

function App() {

  return (
    <>
      <Header/>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 1</h2>
      <TarjetaBienvenida usuario={"pepe"}></TarjetaBienvenida>
      <TarjetaBienvenida usuario={"alberto"}></TarjetaBienvenida>
      <TarjetaBienvenida usuario={"pedro sanchez"}></TarjetaBienvenida>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 2</h2>
      <Producto nombre = "9070XT" precio = "1200" disponible = {true}/>
      <BarraProgreso porcentaje={81}/>
      <hr />
      <AlertBox tipo = {"exito"} mostrarIcono></AlertBox>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 3</h2>
      <Producto2 nombre = "Coche"/>
    </>
  )
}

export default App

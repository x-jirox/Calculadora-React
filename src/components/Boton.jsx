import React from 'react'
import '../style/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div
      //para comillas inveritas usar alt+96
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
}



export default Boton
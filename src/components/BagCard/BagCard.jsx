import React from 'react'
import { sendPostRequest } from '../../helpers/functions'
import './BagCard.css'

const BagCard = ({ id, name, value }) => {
  const data = {
    "ID": "",
    "Fecha": "",
    "MontoIngresado": "",
    "NecesidadesBasicas": "-200000",
    "AhorroProyectos": "",
    "InversionesLibertadFinanciera": "",
    "Diversion": "",
    "Formacion": "",
    "Donativos": "",
    "MotivoRetiro": "Test"
  }
  return (
    <section className='bagCardMainContainer'>
        <h2>{name}</h2>
        <h3>Porcentaje del monto total 50%</h3>
        <h3>Saldo disponible {value === undefined ? '$0' : '$' + value}</h3>
        <input type='number' placeholder='$0' name=''></input>
        <textarea placeholder='Motivo del retiro'></textarea>
        <button onClick={() => sendPostRequest(data)}>Retirar</button>
    </section>
    // <form id={id} className='bagCardMainContainer' onSubmit={(e) => sendPostRequest(e, id)}>
    //     <h2>{name}</h2>
    //     <h3>Porcentaje del monto total 50%</h3>
    //     <h3>Saldo disponible {value === undefined ? '$0' : '$' + value}</h3>
    //     <input className="contenedor0__input--ingresoDinero" id="ingresoDineroInput" type="number"  placeholder="$0" name="NecesidadesBasicas" />
    //     {/* <textarea placeholder='Motivo del retiro'></textarea> */}
    //     <input type="submit" />
    // </form>
  )
}

export default BagCard

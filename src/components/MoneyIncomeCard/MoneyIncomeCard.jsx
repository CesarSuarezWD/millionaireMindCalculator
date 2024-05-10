import React from 'react'
import { sendPostRequest } from '../../helpers/functions'
import './MoneyIncomeCard.css'

const MoneyIncomeCard = ({saldoDisponible}) => {

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
  
  // const doPostResponse = doPost(data);

  return (
    <section id='ingresoDineroCard' className='MoneyIncomeCardMainContainer'>
        <h2>Ingresa el monto de dinero</h2>
        <input placeholder='$0'></input>
        <button onClick={() => sendPostRequest(data)}>Ingresar</button>
        <h2 placeholder='0'>Total dinero disponible {saldoDisponible === undefined ? '$0' : '$' + saldoDisponible}</h2>
    </section>
    // <form id='ingresoDineroCard' className='MoneyIncomeCardMainContainer' onSubmit={(e) => sendPostRequest(data)}>
    //     <h2>Ingresa el monto de dinero</h2>
    //     <input className="contenedor0__input--ingresoDinero" id="ingresoDineroInput" type="number"  placeholder="$0" name="MontoIngresado" />
    //     {/* <button onClick={() => sendPostRequest(data)}>Ingresar</button> */}
    //     <input type="submit" />
    //     <h2 placeholder='0'>Total dinero disponible {saldoDisponible === undefined ? '$0' : '$' + saldoDisponible}</h2>
    // </form>
  )
}

export default MoneyIncomeCard
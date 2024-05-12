import React, { useEffect, useState } from "react";
import { sendPostRequest, dateNowFormated } from "../../helpers/functions";
import "./MoneyIncomeCard.css";

const MoneyIncomeCard = ({ saldoDisponible, setResponse }) => {

  const[transactionStatus, setTransactionStatus] = useState(null)
  const [inputValue, setInputValue] = useState("")
  let dateFormated = dateNowFormated();

  const data = {
    // ID: "",
    Fecha: dateFormated,
    MontoIngresado: inputValue,
    // NecesidadesBasicas: "",
    // AhorroProyectos: "",
    // InversionesLibertadFinanciera: "",
    // Diversion: "",
    // Formacion: "",
    // Donativos: "",
    // MotivoRetiro: "",
  };
  
  const handleInputChange = (event) => {
    let value = event.target.value
    value = value.replace(/[^0-9]/g, '');
    if (value < 0) {
      setInputValue(0);
    }else {
      const numeroSinPuntos = value.replace(/\./g, '');
      const numeroFormateado = Number(numeroSinPuntos).toLocaleString('es-ES');
      setInputValue(numeroFormateado);
    }
  };

  useEffect(() => {
    setResponse(transactionStatus)
    transactionStatus === 200 ? (setInputValue(''), setTransactionStatus(null)) : (setInputValue(inputValue), setTransactionStatus(transactionStatus));
  }, [handleInputChange])

  return (
    <section id="ingresoDineroCard" className="MoneyIncomeCardMainContainer">
      <h2>Ingresa el monto de dinero</h2>
      <input
        type="text"
        id="inputMoneyIncome"
        placeholder="$0"
        onChange={handleInputChange}
        value={inputValue}
      ></input>
      <button onClick={() => sendPostRequest(data, setTransactionStatus)} disabled={inputValue < 1 || inputValue === '' ? true : false}>Ingresar</button>
      <h2 placeholder="0">
        Total dinero disponible{" "}
        {saldoDisponible === undefined ? "$0" : "$" + saldoDisponible.toLocaleString('es-ES')}
      </h2>
    </section>
  );
};

export default MoneyIncomeCard;

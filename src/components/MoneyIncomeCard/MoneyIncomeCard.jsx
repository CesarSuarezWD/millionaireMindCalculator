import React, { useEffect, useState } from "react";
import { sendPostRequest } from "../../helpers/functions";
import "./MoneyIncomeCard.css";

const MoneyIncomeCard = ({ saldoDisponible, setResponse }) => {

  const[transactionStatus, setTransactionStatus] = useState(null)
  const [inputValue, setInputValue] = useState("")

  const data = {
    // ID: "",
    // Fecha: "",
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
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setResponse(transactionStatus)
    transactionStatus === 200 ? (setInputValue(''), setTransactionStatus(null)) : (setInputValue(inputValue), setTransactionStatus(transactionStatus));
  }, [handleInputChange])

  return (
    <section id="ingresoDineroCard" className="MoneyIncomeCardMainContainer">
      <h2>Ingresa el monto de dinero</h2>
      <input
        id="inputMoneyIncome"
        placeholder="$0"
        onChange={handleInputChange}
        value={inputValue}
      ></input>
      <button onClick={() => sendPostRequest(data, setTransactionStatus)}>Ingresar</button>
      <h2 placeholder="0">
        Total dinero disponible{" "}
        {saldoDisponible === undefined ? "$0" : "$" + saldoDisponible}
      </h2>
    </section>
  );
};

export default MoneyIncomeCard;

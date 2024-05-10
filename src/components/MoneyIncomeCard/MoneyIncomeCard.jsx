import React, { useState } from "react";
import { sendPostRequest } from "../../helpers/functions";
import "./MoneyIncomeCard.css";

const MoneyIncomeCard = ({ saldoDisponible }) => {

  const[transactionStatus, setTransactionStatus] = useState(null)
  const [inputValue, setInputValue] = useState("");

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
  console.log(transactionStatus);
  return (
    <section id="ingresoDineroCard" className="MoneyIncomeCardMainContainer">
      <h2>Ingresa el monto de dinero</h2>
      <input
        id="inputMoneyIncome"
        placeholder="$0"
        onChange={handleInputChange}
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

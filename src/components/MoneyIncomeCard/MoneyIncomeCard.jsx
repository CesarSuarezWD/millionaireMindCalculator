import React, { useEffect, useState } from "react";
import { sendPostRequest, dateNowFormated } from "../../helpers/functions";
import toast, { Toaster } from 'react-hot-toast';
import moneyBagIcon from '../../assets/icons8-coins-64.png'
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
    let localInputValue = event.target.value
    localInputValue = localInputValue.replace(/[^0-9]/g, '');
    if (localInputValue < 0) {
      setInputValue(0);
    }else {
      const numeroSinPuntos = localInputValue.replace(/\./g, '');
      const numeroFormateado = Number(numeroSinPuntos).toLocaleString('es-ES');
      setInputValue(`$ ${numeroFormateado}`);
    }
  };

  useEffect(() => {
    setResponse(transactionStatus)
    transactionStatus === 200 ? (toast.success(`Has consignado exitosamente ${inputValue} !`, {duration: 3000}), setInputValue(''), setTransactionStatus(null)) : (setInputValue(inputValue), setTransactionStatus(transactionStatus));
  }, [handleInputChange])

  return (
    <section id="ingresoDineroCard" className="moneyIncomeCardMainContainer">
      <img src={moneyBagIcon} />
      <h2 className="moneyIncomeH2">Ingresa el monto de dinero a ser distribuido</h2>
      <input
        className="moneyIncomeCardInput"
        type="text"
        id="inputMoneyIncome"
        placeholder="$0"
        onChange={handleInputChange}
        value={inputValue}
      ></input>
      <h3 className="moneyIncomeCardH3" placeholder="0">
        Total dinero disponible <br/>
        <strong>{saldoDisponible === undefined ? "$0" : `$${saldoDisponible.toLocaleString('es-ES')}`}</strong>
      </h3>
      <button className="moneyIncomeButton" onClick={() => sendPostRequest(data, setTransactionStatus)} disabled={inputValue < 1 || inputValue === '' ? true : false}>Ingresar</button>
    </section>
  );
};

export default MoneyIncomeCard;

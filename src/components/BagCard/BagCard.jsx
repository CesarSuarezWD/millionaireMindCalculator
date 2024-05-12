import React, {useState, useEffect} from "react";
import { sendPostRequest, dateNowFormated, handleTextAreaChange, withdrawalRestriction } from "../../helpers/functions";
import "./BagCard.css";

const BagCard = ({ porcentaje, name, value, setResponse }) => {

  const[transactionStatus, setTransactionStatus] = useState(null)
  const [validationAmmount, setValidationAmmount] = useState(null)
  const [inputValue, setInputValue] = useState("");
  const [necesidadesBasicasWithdrawal, setNecesidadesBasicasWithdrawal] = useState("");
  const [ahorroProyectosWithdrawal, setAhorroProyectosWithdrawal] = useState("");
  const [inversionesLibertadFinancieraWithdrawal, setInversionesLibertadFinancieraWithdrawal] = useState("");
  const [diversionWithdrawal, setDiversionWithdrawal] = useState("");
  const [formacionWithdrawal, setFormacionWithdrawal] = useState("");
  const [donativosWithdrawal, setDonativosWithdrawal] = useState("");
  const [withdrawalReason, setWithdrawalReason] = useState("")
  let dateFormated = dateNowFormated();

  useEffect(() => {
    if(name === 'Necesidades Básicas'){
      setNecesidadesBasicasWithdrawal(`-${inputValue}`);
    } else if (name === 'Ahorro / Proyectos'){
      setAhorroProyectosWithdrawal(`-${inputValue}`);
    }else if (name === 'Inversiones / L. Financiera'){
      setInversionesLibertadFinancieraWithdrawal(`-${inputValue}`);
    }else if (name === 'Diversión'){
      setDiversionWithdrawal(`-${inputValue}`);
    }else if (name === 'Formación'){
      setFormacionWithdrawal(`-${inputValue}`);
    }else if (name === 'Donativos'){
      setDonativosWithdrawal(`-${inputValue}`);
    }
  }, [inputValue])

  const data = {
    // ID: "",
    Fecha: dateFormated,
    // MontoIngresado: "",
    NecesidadesBasicas: necesidadesBasicasWithdrawal,
    AhorroProyectos: ahorroProyectosWithdrawal,
    InversionesLibertadFinanciera: inversionesLibertadFinancieraWithdrawal,
    Diversion: diversionWithdrawal,
    Formacion: formacionWithdrawal,
    Donativos: donativosWithdrawal,
    MotivoRetiro: withdrawalReason,
  };

  const handleInputChange = (event) => {
    let localInputValue = event.target.value
    localInputValue = localInputValue.replace(/[^0-9]/g, '');
    if (localInputValue < 0) {
      setInputValue(0);
    }else {
      const numeroSinPuntos = localInputValue.replace(/\./g, '');
      const numeroFormateado = Number(numeroSinPuntos).toLocaleString('es-ES');
      setValidationAmmount(numeroSinPuntos)
      setInputValue(`$ ${numeroFormateado}`);
    }
  };

  useEffect(() => {
    setResponse(transactionStatus)
    transactionStatus === 200 ? (setInputValue(''), setWithdrawalReason(''), setTransactionStatus(null)) : (setInputValue(inputValue), setWithdrawalReason(withdrawalReason), setTransactionStatus(transactionStatus));
  }, [handleInputChange])
  
  return (
    <section className="bagCardMainContainer">
      <h2>{name}</h2>
      <h3>Porcentaje del monto total {porcentaje}</h3>
      <h3>Saldo disponible {value === undefined ? "$0" : `$${value.toLocaleString('es-ES')}`}</h3>
      <input type="text" placeholder="$0" onChange={() => handleInputChange(event, setInputValue, setValidationAmmount)} value={inputValue}></input>
      <textarea placeholder="Motivo del retiro" onChange={(event) => handleTextAreaChange(event, setWithdrawalReason)} value={withdrawalReason}></textarea>
      {/* <button onClick={() => sendPostRequest(data, setTransactionStatus)} disabled={(inputValue < 1 || withdrawalReason === '' ) ? true : false}>Retirar</button> */}
      <button onClick={() => withdrawalRestriction(value, validationAmmount)} disabled={(inputValue < 1 || withdrawalReason === '' ) ? true : false}>Retirar</button>
    </section>
  );
};

export default BagCard;

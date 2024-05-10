import React, {useState, useEffect} from "react";
import { sendPostRequest } from "../../helpers/functions";
import "./BagCard.css";

const BagCard = ({ porcentaje, name, value, setResponse }) => {

  const[transactionStatus, setTransactionStatus] = useState(null)
  const [inputValue, setInputValue] = useState("");
  const [necesidadesBasicasWithdrawal, setNecesidadesBasicasWithdrawal] = useState("");
  const [ahorroProyectosWithdrawal, setAhorroProyectosWithdrawal] = useState("");
  const [inversionesLibertadFinancieraWithdrawal, setInversionesLibertadFinancieraWithdrawal] = useState("");
  const [diversionWithdrawal, setDiversionWithdrawal] = useState("");
  const [formacionWithdrawal, setFormacionWithdrawal] = useState("");
  const [donativosWithdrawal, setDonativosWithdrawal] = useState("");
  const [withdrawalReason, setWithdrawalReason] = useState("")

  useEffect(() => {
    if(name === 'Necesidades Básicas'){
      setNecesidadesBasicasWithdrawal(inputValue);
    } else if (name === 'Ahorro / proyectos'){
      setAhorroProyectosWithdrawal(inputValue);
    }else if (name === 'Inversiones / L. Financiera'){
      setInversionesLibertadFinancieraWithdrawal(inputValue);
    }else if (name === 'Diversión'){
      setDiversionWithdrawal(inputValue);
    }else if (name === 'Formación'){
      setFormacionWithdrawal(inputValue);
    }else if (name === 'Donativos'){
      setDonativosWithdrawal(inputValue);
    }
  }, [inputValue])

  const data = {
    // ID: "",
    // Fecha: "",
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
    setInputValue(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setWithdrawalReason(event.target.value);
  };

  useEffect(() => {
    setResponse(transactionStatus)
    transactionStatus === 200 ? (setInputValue(''), setWithdrawalReason(''), setTransactionStatus(null)) : (setInputValue(inputValue), setWithdrawalReason(withdrawalReason), setTransactionStatus(transactionStatus));
  }, [handleInputChange])
  
  return (
    <section className="bagCardMainContainer">
      <h2>{name}</h2>
      <h3>Porcentaje del monto total {porcentaje}</h3>
      <h3>Saldo disponible {value === undefined ? "$0" : "$" + value}</h3>
      <input type="number" placeholder="$0" onChange={handleInputChange} value={inputValue}></input>
      <textarea placeholder="Motivo del retiro" onChange={handleTextAreaChange} value={withdrawalReason}></textarea>
      <button onClick={() => sendPostRequest(data, setTransactionStatus)}>Retirar</button>
    </section>
  );
};

export default BagCard;

import { useEffect, useState } from "react";
import BagCard from "./components/BagCard/BagCard";
import MoneyIncomeCard from "./components/MoneyIncomeCard/MoneyIncomeCard";
import {  getSpreadsheetData } from "./helpers/functions";
import basicNeedsIcon from './assets/icons8-basic-needs-64.png'
import projectsIcon from './assets/icons8-bank-building-64.png'
import investmentIcon from './assets/icons8-investment-64.png'
import funIcon from './assets/icons8-theatre-64.png'
import educationIcon from './assets/icons8-study-64.png'
import charityIcon from './assets/icons8-volunteering-64.png'
import "./App.css";

function App() {

  const [totalDineroDisponibleValue, setTotalDineroDisponibleValue] =
    useState();
  const [totalNecesidadesBasicasValue, setTotalNecesidadesBasicasValue] =
    useState();
  const [totalAhorroProyectosValue, setTotalAhorroProyectosValue] = useState();
  const [
    totalInversionesLibertadFinancieraValue,
    setTotalInversionesLibertadFinancieraValue,
  ] = useState();
  const [totalDiversionValue, setTotalDiversionValue] = useState();
  const [totalFormacionValue, setTotalFormacionValue] = useState();
  const [totalDonativosValue, setTotalDonativosValue] = useState();
  const bags = [
    {
      icon: basicNeedsIcon,
      porcentajeDineroTotal: "50%",
      nombreBolsa: "Necesidades Básicas",
      valorBolsa: totalNecesidadesBasicasValue,
    },
    {
      icon: projectsIcon,
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Ahorro / Proyectos",
      valorBolsa: totalAhorroProyectosValue,
    },
    {
      icon: investmentIcon,
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Inversiones",
      valorBolsa: totalInversionesLibertadFinancieraValue,
    },
    {
      icon: funIcon,
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Diversión",
      valorBolsa: totalDiversionValue,
    },
    {
      icon: educationIcon,
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Formación",
      valorBolsa: totalFormacionValue,
    },
    {
      icon: charityIcon,
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Donativos",
      valorBolsa: totalDonativosValue,
    },
  ];

  const [response, setResponse] = useState('')

  useEffect(() => {
    (async () => {
      await getSpreadsheetData(
        setTotalDineroDisponibleValue,
        setTotalNecesidadesBasicasValue,
        setTotalAhorroProyectosValue,
        setTotalInversionesLibertadFinancieraValue,
        setTotalDiversionValue,
        setTotalFormacionValue,
        setTotalDonativosValue
      );
    })();
  }, [response]);

  const updateResponse = (newResponse) => {
    setResponse(newResponse);
  }

  return (
    <div className="mainContainer"> 
      <div className="subContainerA">
        <MoneyIncomeCard saldoDisponible={totalDineroDisponibleValue} setResponse={updateResponse} />      
      </div>
      <div className="subContainerB">
        {bags.map((bag, index) => {
          return (
            <BagCard
              key={index}
              icon={bag.icon}
              porcentaje={bag.porcentajeDineroTotal}
              name={bag.nombreBolsa}
              value={bag.valorBolsa}
              setResponse={updateResponse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

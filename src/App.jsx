import { useEffect, useState } from "react";
import BagCard from "./components/BagCard/BagCard";
import MoneyIncomeCard from "./components/MoneyIncomeCard/MoneyIncomeCard";
import {  getSpreadsheetData } from "./helpers/functions";
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
      porcentajeDineroTotal: "50%",
      nombreBolsa: "Necesidades Básicas",
      valorBolsa: totalNecesidadesBasicasValue,
    },
    {
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Ahorro / Proyectos",
      valorBolsa: totalAhorroProyectosValue,
    },
    {
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Inversiones / L. Financiera",
      valorBolsa: totalInversionesLibertadFinancieraValue,
    },
    {
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Diversión",
      valorBolsa: totalDiversionValue,
    },
    {
      porcentajeDineroTotal: "10%",
      nombreBolsa: "Formación",
      valorBolsa: totalFormacionValue,
    },
    {
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
      <MoneyIncomeCard saldoDisponible={totalDineroDisponibleValue} setResponse={updateResponse} />
      {bags.map((bag, index) => {
        return (
          <BagCard
            key={index}
            porcentaje={bag.porcentajeDineroTotal}
            name={bag.nombreBolsa}
            value={bag.valorBolsa}
            setResponse={updateResponse}
          />
        );
      })}
    </div>
  );
}

export default App;

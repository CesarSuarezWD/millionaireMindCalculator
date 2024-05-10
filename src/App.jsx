import { useEffect, useState } from "react";
import BagCard from "./components/BagCard/BagCard";
import MoneyIncomeCard from "./components/MoneyIncomeCard/MoneyIncomeCard";
import { createRegister, getSpreadsheetData } from "./helpers/functions";
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
      nombreBolsa: "Ahorro / proyectos",
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

  const handleCreateRegister = () => {
    createRegister()
      .then((data) => {
        console.log("Esta es la respuesta del dato creado: ", data); // Aquí puedes manejar la data retornada
      })
      .catch((error) => {
        console.error("Error al crear el registro:", error);
      });
  };

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
      ); // Use async/await inside useEffect
    })();
  }, []);

  return (
    <div className="mainContainer">
      {/* <button onClick={() => getSpreadsheetData(setTotalDineroDisponibleValue, setTotalNecesidadesBasicasValue, setTotalAhorroProyectosValue, setTotalInversionesLibertadFinancieraValue, setTotalDiversionValue, setTotalFormacionValue, setTotalDonativosValue)}>Read</button> */}
      <button onClick={() => handleCreateRegister()}>Create</button>
      <MoneyIncomeCard saldoDisponible={totalDineroDisponibleValue} />
      {bags.map((bag, index) => {
        return (
          <BagCard
            key={index}
            porcentaje={bag.porcentajeDineroTotal}
            name={bag.nombreBolsa}
            value={bag.valorBolsa}
          />
        );
      })}
    </div>
  );
}

export default App;

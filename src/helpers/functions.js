  import axios from 'axios';

  // Formateo de la fecha actual
  export const dateNowFormated = () => {
    const timestamp = Date.now();
    const fecha = new Date(timestamp);
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('es-CO', { month: 'short' });
    const año = fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${año}`;
    return fechaFormateada;
  }

  export const handleInputChange = (event, setInputValue, setValidationAmmount) => {
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

  export const handleTextAreaChange = (event, setWithdrawalReason) => {
    let textValue = event.target.value;
    setWithdrawalReason(textValue);
  };

  export const withdrawalRestriction = (value, validationAmmount) => {
    const valueToNumber = parseInt(value)
    const inputValueToNumber = parseInt(validationAmmount)
    inputValueToNumber > valueToNumber ? console.log('no puedes retirar mas de lo que tienes en esta bolsa') : console.log('retirado con exito')
  }

  // Funcion doGet
  export const getSpreadsheetData = async (setTotalDineroDisponibleValue, setTotalNecesidadesBasicasValue, setTotalAhorroProyectosValue, setTotalInversionesLibertadFinancieraValue, setTotalDiversionValue, setTotalFormacionValue, setTotalDonativosValue) => {
    try {
      const response = await axios.get('https://script.google.com/macros/s/AKfycbySX0xs9LDiAd54yHg6IsKVKmm4Q5_5Fd4T41EwqgPfQToMhNkLFFaAsFHsy4j-5TOtuw/exec');
      const jsonData = response.data.myalldata;
      setTotalDineroDisponibleValue(jsonData[1][10])
      setTotalNecesidadesBasicasValue(jsonData[1][11])
      setTotalAhorroProyectosValue(jsonData[1][12])
      setTotalInversionesLibertadFinancieraValue(jsonData[1][13])
      setTotalDiversionValue(jsonData[1][14])
      setTotalFormacionValue(jsonData[1][15])
      setTotalDonativosValue(jsonData[1][16])
      // console.log(jsonData);
    } catch (error) {
      console.error("Error al traer la información", error);
    }
  };

  // Funcion doPost
  export const sendPostRequest = async (data, setTransactionStatus) => {
    try {
      fetch("https://script.google.com/macros/s/AKfycbySX0xs9LDiAd54yHg6IsKVKmm4Q5_5Fd4T41EwqgPfQToMhNkLFFaAsFHsy4j-5TOtuw/exec", 
          {
              method: "POST",
              body: JSON.stringify(data)
          }).then(res => setTransactionStatus(res.status));
      
    } catch (error) {
      console.log("Error enviando la información", error);
    }
  }

  // Funcion doPost de preuba
  export const createRegister = () => {
    return new Promise((resolve, reject) => {
      fetch('https://sheetdb.io/api/v1/ev60nhsjp9umm', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: [{
              // "ID": "1",
              // "Fecha": "4/may./2024",
              // "MontoIngresado": "",
              // "NecesidadesBasicas": "-42200",
              // "AhorroProyectos": "",
              // "InversionesLibertadFinanciera": "",
              // "Diversion": "",
              // "Formacion": "",
              // "Donativos": "",
              // "MotivoRetiro": "Compra antipulgas Gatos",
              // "Total Dinero Disponible": "",
              // "Total Necesidades Básicas": "",
              // "Total Ahorro / proyectos": "",
              // "Total Inversiones / Libertad Financiera": "",
              // "Total Diversión": "",
              // "Total Formación": "",
              // "Total Donativos": ""
            }]
          })
        })
        .then(response => response.json())
        .then(data => {
          resolve(data); // Resuelve la promesa con los datos recibidos
        })
        .catch(error => {
          reject(error); // Rechaza la promesa con el error recibido
        });
    });
  }
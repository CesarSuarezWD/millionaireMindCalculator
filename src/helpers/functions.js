  // Implementado de: https://sheetdb.io/ y de https://www.youtube.com/watch?v=xfSeE-E9i-E&list=LL&index=2&t=24s

  import axios from 'axios';

  export const getSpreadsheetData = async (setTotalDineroDisponibleValue, setTotalNecesidadesBasicasValue, setTotalAhorroProyectosValue, setTotalInversionesLibertadFinancieraValue, setTotalDiversionValue, setTotalFormacionValue, setTotalDonativosValue) => {
    try {
      const response = await axios.get('https://script.google.com/macros/s/AKfycbwiBjRGF8rRT5aGVL8YA_rbmWNVUllXW5WVQ0TZpPA2-VgorhLMB4kcrXaQwW3owpNEKg/exec');
      const jsonData = response.data.myalldata;
      setTotalDineroDisponibleValue(jsonData[1][10])
      setTotalNecesidadesBasicasValue(jsonData[1][11])
      setTotalAhorroProyectosValue(jsonData[1][12])
      setTotalInversionesLibertadFinancieraValue(jsonData[1][13])
      setTotalDiversionValue(jsonData[1][14])
      setTotalFormacionValue(jsonData[1][15])
      setTotalDonativosValue(jsonData[1][16])
    } catch (error) {
      console.error(error);
    }
  };


  // export const sendPostRequest = async (data) => {
  //   try {
  //     const response = await axios.post('https://script.google.com/macros/s/AKfycbwiBjRGF8rRT5aGVL8YA_rbmWNVUllXW5WVQ0TZpPA2-VgorhLMB4kcrXaQwW3owpNEKg/exec', data);
  //     console.log('Transacción realizada correctamente!', response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  export const sendPostRequest = async (data) => {
      console.log(data)
      fetch("https://script.google.com/macros/s/AKfycbwiBjRGF8rRT5aGVL8YA_rbmWNVUllXW5WVQ0TZpPA2-VgorhLMB4kcrXaQwW3owpNEKg/exec", 
          {
              method: "POST",
              body: JSON.stringify(data)
          }).then(res => res.text());
  }

//   export const sendPostRequest = (e, id) => {
//     const formEle = document.getElementById(id)
//     e.preventDefault()
//     const formData = new FormData(formEle)
//     console.log(formEle);
//     fetch("https://script.google.com/macros/s/AKfycbwiBjRGF8rRT5aGVL8YA_rbmWNVUllXW5WVQ0TZpPA2-VgorhLMB4kcrXaQwW3owpNEKg/exec", 
//         {
//             method: "POST",
//             body: formData
//         }).then((res) => res.text()).then((data) => {console.log(data)}).catch((error) => {console.log(error);});
// }



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
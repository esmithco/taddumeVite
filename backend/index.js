// Crear una función que devuelve una promesa
function hacerAlgoAsync() {
    return new Promise((resolve, reject) => {
      // Simular una operación asincrónica (puede ser una solicitud HTTP, acceso a una base de datos, etc.)
      setTimeout(() => {
        const exito = false; // Simular éxito o fracaso de la operación
  
        if (exito) {
          resolve('¡La operación se completó con éxito!'); // Resuelve la promesa si la operación fue exitosa
        } else {
          reject('¡Hubo un error en la operación!'); // Rechaza la promesa si la operación falló
        }
      }, 2000); // Simular una operación que tarda 2 segundos
    });
  }
  
  // Función para manejar la resolución
  function manejarExito(resultado) {
    console.log('Operación exitosa:', resultado);
    return resultado
  }
  
  // Función para manejar el rechazo
  function manejarError(error) {
    console.log('Error test:', error);
    throw new Error('error en fun 2');
  }
  
  // Utilizar la promesa creada y pasar las funciones para manejar resolución y rechazo
  hacerAlgoAsync()
    .then(manejarExito)
    .catch(() => { console.log('catch p')})
    .then(manejarExito)
    .then(null)
    .then(manejarError,manejarExito)
    .catch(() => { console.log('catch p')})
    // .then(manejarError)
    // .then(manejarExito,manejarError)
    // .then(manejarExito);


    // .then(() => {
    //     return 10
    // })
    // .then((valor) => {
    //     console.log(valor + 1);
    // })
    // .then(null, manejarError);
  
window.onload = () => {
  consulaAPI("Madrid", "ES");
};

function consulaAPI(ciudad, pais) {
  const appiId = "bf61c87c1d93e633046c31e64e0ead02";
  let url =
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appiId}&Lang=es`;

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then(datos => {
      console.log(datos);
    })

    .catch(error => {
     console.error(error);
    });
}

(function () {
    
  
    
    var forms = document.querySelectorAll('.necesitaValidacion')
  
   
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('ha sido validado')
        }, false)
      })
  })()

  var alertList = document.querySelectorAll('.alert')
  alertList.forEach(function (alert) {
    new bootstrap.Alert(alert)
  })
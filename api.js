var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Qkfp5YEtHjyXo00zjnOS");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  const cargarOrdenes = async() => {
  try {
    const respuesta = await fetch("https://core.views.biz/api/v1/orders", requestOptions);
    const datos = await respuesta.json();
        
    let ordenes = '';
    datos.data.forEach(orden => {
      ordenes += `
      <div class="card card-box">

          <div class="video">
          <hr>
          </div>

          <div class="card__info">
            <div class="card__id"><span>ID: ${orden.id}</span></div>
            <div class="card__fecha"><span>${orden.service_name}</span></div>
          </div>

          <div class="card__status">
            <div class="status"><span>Status: Active</span></div>
            <div class="bar"><span>${orden.status}</span></div>
          </div>

      </div>
        `;
    });   
    
    document.getElementById('contenedor').innerHTML = ordenes;

  }catch(error) {
    console.log(error);
  }
}

cargarOrdenes();
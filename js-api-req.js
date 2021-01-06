  // https://www.javascripture.com
  
  // Parâmetros
  let params = {
    url: "https://reqres.in/api/users",
  }


  // Requisição GET
  var request = new Request(params.url);
  fetch(request).then(function(response) {
    return response.text();
  }).then(function(response) {
    response = JSON.parse(response)

    // Mostra requisição no console
    console.log(response)
  });

  // Requisição POST
  var request = new Request(params.url, {
    method: 'POST',
    body: '{ "name": "Andressa", "job": "DevOps" }' 
  });

  request.json().then(function(response) { 
    console.log(`Nome: ${response.name}; Job: ${response.job}`);
  });

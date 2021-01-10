// generate req = POSTMAN -> code -> javascript

// Parâmetros
let params = {
  url: "https://reqres.in/api/users",
}


// --------------------------------  Requisição GET
function get(){
  let request = new Request(params.url, {
    method: 'GET',
  });

  fetch(request).then(function(response) { return response.text() }).then(function(response){
    response = JSON.parse(response)

    console.log(response);
  });
}get()

// --------------------------------  Requisição POST
function post(){
  let request = new Request(params.url, {
    method: 'POST',
    body: '{ "name": "Andressa", "job": "DevOps" }' 
  });

  request.json().then(function(response) { 
    console.log(`Nome: ${response.name}; Job: ${response.job}`);
  });
}post()
